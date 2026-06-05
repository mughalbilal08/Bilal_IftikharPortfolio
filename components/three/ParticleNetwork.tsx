"use client";

import { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ParticleNetworkProps {
    count?: number;
    spread?: number;
    connectionDistance?: number;
    color?: string;
    lineOpacity?: number;
    speed?: number;
}

export function ParticleNetwork({
    count = 120,
    spread = 12,
    connectionDistance = 2.2,
    color = "#2563eb",
    lineOpacity = 0.15,
    speed = 0.08,
}: ParticleNetworkProps) {
    const groupRef = useRef<THREE.Group>(null);
    const linesRef = useRef<THREE.LineSegments>(null);
    const mouse = useRef({ x: 0, y: 0 });

    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const velocities = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * spread;
            positions[i * 3 + 1] = (Math.random() - 0.5) * spread;
            positions[i * 3 + 2] = (Math.random() - 0.5) * spread * 0.6;

            velocities[i * 3] = (Math.random() - 0.5) * 0.008;
            velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.008;
            velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.004;
        }

        return { positions, velocities };
    }, [count, spread]);

    const lineGeometry = useMemo(() => new THREE.BufferGeometry(), []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
            mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useFrame((state) => {
        const group = groupRef.current;
        const lines = linesRef.current;
        if (!group || !lines) return;

        const positions = particles.positions;
        const velocities = particles.velocities;
        const halfSpread = spread / 2;

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            positions[i3] += velocities[i3];
            positions[i3 + 1] += velocities[i3 + 1];
            positions[i3 + 2] += velocities[i3 + 2];

            for (let axis = 0; axis < 3; axis++) {
                const idx = i3 + axis;
                const limit = axis === 2 ? halfSpread * 0.6 : halfSpread;
                if (positions[idx] > limit || positions[idx] < -limit) {
                    velocities[idx] *= -1;
                }
            }
        }

        const pointsGeometry = group.children[0] as THREE.Points;
        if (pointsGeometry?.geometry) {
            pointsGeometry.geometry.attributes.position.needsUpdate = true;
        }

        const linePositions: number[] = [];
        const maxDistSq = connectionDistance * connectionDistance;

        for (let i = 0; i < count; i++) {
            for (let j = i + 1; j < count; j++) {
                const dx = positions[i * 3] - positions[j * 3];
                const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
                const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
                const distSq = dx * dx + dy * dy + dz * dz;

                if (distSq < maxDistSq) {
                    linePositions.push(
                        positions[i * 3],
                        positions[i * 3 + 1],
                        positions[i * 3 + 2],
                        positions[j * 3],
                        positions[j * 3 + 1],
                        positions[j * 3 + 2]
                    );
                }
            }
        }

        lineGeometry.setAttribute(
            "position",
            new THREE.Float32BufferAttribute(linePositions, 3)
        );
        lines.geometry = lineGeometry;

        group.rotation.y = THREE.MathUtils.lerp(
            group.rotation.y,
            state.clock.elapsedTime * speed + mouse.current.x * 0.15,
            0.02
        );
        group.rotation.x = THREE.MathUtils.lerp(
            group.rotation.x,
            mouse.current.y * 0.08,
            0.02
        );
    });

    return (
        <group ref={groupRef}>
            <points>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        args={[particles.positions, 3]}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.06}
                    color={color}
                    transparent
                    opacity={0.85}
                    sizeAttenuation
                    depthWrite={false}
                />
            </points>
            <lineSegments ref={linesRef}>
                <bufferGeometry />
                <lineBasicMaterial
                    color={color}
                    transparent
                    opacity={lineOpacity}
                    depthWrite={false}
                />
            </lineSegments>
        </group>
    );
}
