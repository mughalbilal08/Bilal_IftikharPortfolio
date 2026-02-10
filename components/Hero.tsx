
"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 700 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window;
            mouseX.set(e.clientX / innerWidth - 0.5);
            mouseY.set(e.clientY / innerHeight - 0.5);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-white text-foreground">
            {/* Background Elements (Subtle Data Flow abstract) */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    style={{ x: useTransform(springX, (x) => x * -50), y: useTransform(springY, (y) => y * -50) }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"
                />
                <motion.div
                    style={{ x: useTransform(springX, (x) => x * 60), y: useTransform(springY, (y) => y * 60) }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]"
                />
            </div>

            <div className="container px-4 md:px-6 flex flex-col items-center z-10 perspective-1000">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ y: y1, rotateX: useTransform(springY, (y) => y * 10), rotateY: useTransform(springX, (x) => x * -10) }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-center"
                >
                    <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-2 bg-clip-text text-transparent bg-gradient-to-b from-zinc-900 to-zinc-500">
                        BILAL
                    </h1>
                    <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-zinc-700 to-zinc-400">
                        IFTIKHAR
                    </h1>
                    <p className="text-sm md:text-lg font-medium tracking-[0.3em] uppercase text-blue-600 font-bold">
                        Data Engineer
                    </p>
                </motion.div>

                {/* Social Links - Vertical on Desktop, Horizontal on Mobile */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="absolute bottom-8 left-8 md:top-1/2 md:-translate-y-1/2 md:left-12 flex md:flex-col gap-6 text-zinc-400"
                >
                    <Link href="https://www.linkedin.com/in/bilal-iftikhar-26130a262" target="_blank" className="hover:text-blue-600 transition-colors">
                        <Linkedin size={20} />
                    </Link>
                    <Link href="https://github.com/mughalbilal08" target="_blank" className="hover:text-blue-600 transition-colors">
                        <Github size={20} />
                    </Link>
                    <Link href="mailto:bilaliftikhar.967@gmail.com" className="hover:text-blue-600 transition-colors">
                        <Mail size={20} />
                    </Link>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-12 right-12 hidden md:flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] uppercase tracking-widest -rotate-90 origin-bottom-right translate-x-3 mb-8 text-secondary">Scroll</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-secondary to-transparent" />
                </motion.div>
            </div>
        </section>
    );
};
