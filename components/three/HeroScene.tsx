"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { ParticleNetwork } from "./ParticleNetwork";
import { FloatingShapes } from "./FloatingShapes";

function Scene() {
    return (
        <>
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={1.2} color="#60a5fa" />
            <pointLight position={[-10, -5, 5]} intensity={0.8} color="#a78bfa" />
            <spotLight
                position={[0, 8, 4]}
                angle={0.4}
                penumbra={1}
                intensity={0.6}
                color="#38bdf8"
            />

            <ParticleNetwork count={100} spread={14} color="#3b82f6" lineOpacity={0.12} />
            <FloatingShapes />
            <Stars
                radius={80}
                depth={50}
                count={2000}
                factor={3}
                saturation={0.2}
                fade
                speed={0.5}
            />
        </>
    );
}

export default function HeroScene() {
    return (
        <Canvas
            camera={{ position: [0, 0, 6], fov: 55 }}
            dpr={[1, 1.5]}
            gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
            style={{ background: "transparent" }}
        >
            <Suspense fallback={null}>
                <Scene />
            </Suspense>
        </Canvas>
    );
}
