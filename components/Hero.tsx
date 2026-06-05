"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const HeroScene = dynamic(() => import("./three/HeroScene"), {
    ssr: false,
    loading: () => (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900" />
    ),
});

export const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 120]);
    const heroOpacity = useTransform(scrollY, [0, 450], [1, 0]);
    const heroScale = useTransform(scrollY, [0, 450], [1, 0.92]);
    const heroBlur = useTransform(scrollY, [0, 450], [0, 8]);
    const heroFilter = useTransform(heroBlur, (v) => `blur(${v}px)`);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { damping: 25, stiffness: 700 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);
    const rotateX = useTransform(springY, (y) => y * 8);
    const rotateY = useTransform(springX, (x) => x * -8);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX / window.innerWidth - 0.5);
            mouseY.set(e.clientY / window.innerHeight - 0.5);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-slate-950 text-white">
            <motion.div
                style={{ opacity: heroOpacity, scale: heroScale, filter: heroFilter }}
                className="absolute inset-0 z-0"
            >
                <HeroScene />
            </motion.div>

            <div className="absolute inset-0 z-[1] bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/80 pointer-events-none" />
            <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(15,23,42,0.6)_70%)] pointer-events-none" />

            <motion.div
                style={{ opacity: heroOpacity }}
                className="container px-4 md:px-6 flex flex-col items-center z-10"
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                        y: y1,
                        rotateX,
                        rotateY,
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center perspective-1000"
                >
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xs md:text-sm font-mono tracking-[0.4em] uppercase text-blue-400 mb-6"
                    >
                        Data Engineer
                    </motion.p>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-2 hero-gradient-text">
                        BILAL
                    </h1>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 hero-gradient-text-alt">
                        IFTIKHAR
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-base md:text-xl text-zinc-300 max-w-xl mx-auto leading-relaxed mb-10"
                    >
                        Building scalable data pipelines, real-time streaming systems,
                        and full-stack applications on{" "}
                        <span className="text-blue-400 font-semibold">Azure & AWS</span>.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <Link
                            href="#projects"
                            className="px-8 py-3.5 rounded-full bg-blue-600 text-white font-semibold text-sm hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 hover:scale-105"
                        >
                            View Projects
                        </Link>
                        <Link
                            href="#contact"
                            className="px-8 py-3.5 rounded-full border border-white/20 text-white font-semibold text-sm hover:bg-white/10 transition-all backdrop-blur-sm hover:scale-105"
                        >
                            Get In Touch
                        </Link>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    className="absolute bottom-8 left-8 md:top-1/2 md:-translate-y-1/2 md:left-12 flex md:flex-col gap-6 text-zinc-400"
                >
                    <Link href="https://www.linkedin.com/in/bilal-iftikhar-26130a262" target="_blank" className="hover:text-blue-400 transition-colors hover:scale-110 transform duration-200">
                        <Linkedin size={20} />
                    </Link>
                    <Link href="https://github.com/mughalbilal08" target="_blank" className="hover:text-blue-400 transition-colors hover:scale-110 transform duration-200">
                        <Github size={20} />
                    </Link>
                    <Link href="mailto:bilaliftikhar.967@gmail.com" className="hover:text-blue-400 transition-colors hover:scale-110 transform duration-200">
                        <Mail size={20} />
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="absolute bottom-10 flex flex-col items-center gap-2 text-zinc-500"
                >
                    <span className="text-[10px] uppercase tracking-widest">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    >
                        <ArrowDown size={16} />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};
