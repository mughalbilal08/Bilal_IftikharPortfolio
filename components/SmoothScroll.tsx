"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";
import { cancelFrame, frame } from "framer-motion";

export const SmoothScroll = ({ children }: { children: ReactNode }) => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.4,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        function update(data: { timestamp: number }) {
            lenis.raf(data.timestamp);
        }

        frame.update(update, true);

        return () => {
            cancelFrame(update);
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
};
