"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ParticleNetwork } from "./ParticleNetwork";

function Scene() {
    return (
        <>
            <ambientLight intensity={0.3} />
            <ParticleNetwork
                count={60}
                spread={18}
                connectionDistance={2.8}
                color="#8b5cf6"
                lineOpacity={0.08}
                speed={0.04}
            />
        </>
    );
}

export default function ProjectsBackground() {
    return (
        <Canvas
            camera={{ position: [0, 0, 8], fov: 50 }}
            dpr={[1, 1.25]}
            gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
            style={{ background: "transparent" }}
        >
            <Suspense fallback={null}>
                <Scene />
            </Suspense>
        </Canvas>
    );
}
