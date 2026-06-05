"use client";

import { Float, MeshDistortMaterial, MeshWobbleMaterial } from "@react-three/drei";

export function FloatingShapes() {
    return (
        <>
            <Float speed={1.8} rotationIntensity={0.6} floatIntensity={1.2}>
                <mesh position={[-2.8, 1.2, -1]}>
                    <icosahedronGeometry args={[0.85, 1]} />
                    <MeshDistortMaterial
                        color="#2563eb"
                        emissive="#1d4ed8"
                        emissiveIntensity={0.35}
                        roughness={0.15}
                        metalness={0.8}
                        distort={0.35}
                        speed={2}
                        transparent
                        opacity={0.75}
                    />
                </mesh>
            </Float>

            <Float speed={2.2} rotationIntensity={0.8} floatIntensity={1.5}>
                <mesh position={[3.2, -0.8, -2]}>
                    <torusKnotGeometry args={[0.55, 0.16, 128, 16]} />
                    <MeshWobbleMaterial
                        color="#7c3aed"
                        emissive="#6d28d9"
                        emissiveIntensity={0.3}
                        roughness={0.2}
                        metalness={0.7}
                        factor={0.4}
                        speed={1.5}
                        transparent
                        opacity={0.7}
                    />
                </mesh>
            </Float>

            <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.9}>
                <mesh position={[1.5, 2.2, -3]}>
                    <octahedronGeometry args={[0.5, 0]} />
                    <meshStandardMaterial
                        color="#06b6d4"
                        emissive="#0891b2"
                        emissiveIntensity={0.4}
                        wireframe
                        transparent
                        opacity={0.55}
                    />
                </mesh>
            </Float>

            <Float speed={1.6} rotationIntensity={0.5} floatIntensity={1}>
                <mesh position={[-3.5, -1.5, -2.5]}>
                    <dodecahedronGeometry args={[0.45, 0]} />
                    <meshStandardMaterial
                        color="#3b82f6"
                        emissive="#2563eb"
                        emissiveIntensity={0.25}
                        wireframe
                        transparent
                        opacity={0.45}
                    />
                </mesh>
            </Float>
        </>
    );
}
