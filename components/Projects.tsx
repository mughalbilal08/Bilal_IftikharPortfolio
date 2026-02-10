"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Cloud, Database, Plane, Search, ShoppingCart, Shield, Car, FolderGit2, ArrowUpRight } from "lucide-react";
import React from "react";

const projects = [
    {
        title: "Real-Time Flight Data Streaming",
        category: "Data Engineering",
        tech: ["Kafka", "Spark", "Snowflake", "Power BI"],
        icon: Plane,
        description: "End-to-end Kafka streaming architecture for high-volume aviation data. Fault-tolerant processing with DLQ handling and real-time dashboards.",
        featured: true
    },
    {
        title: "Weather Insights Dashboard",
        category: "Cloud Engineering",
        tech: ["Azure Event Hubs", "Stream Analytics"],
        icon: Cloud,
        description: "Real-time ingestion system handling weather data via Azure infrastructure.",
        featured: false
    },
    {
        title: "LinkedIn Job Searcher",
        category: "Data Pipeline",
        tech: ["Spark", "PySpark", "Airflow"],
        icon: Search,
        description: "Automated extraction pipeline processing job data from multiple sources.",
        featured: false
    },
    {
        title: "E-Commerce Analytics Pipeline",
        category: "Analytics Engineering",
        tech: ["Snowflake", "dbt", "Power BI"],
        icon: ShoppingCart,
        description: "Medallion Architecture (Bronze, Silver, Gold) implementation for e-commerce data. Standardized metrics and governance.",
        featured: true
    },
    {
        title: "AI-Driven Secure File Sharing",
        category: "Full Stack + AI",
        tech: ["Django", "Three.js", "AI/ML", "Encryption"],
        icon: Shield,
        description: "Zero Trust file sharing platform with AES encryption and AI-based anomaly detection.",
        featured: false
    },
    {
        title: "DirectDrive",
        category: "Web App",
        tech: ["PHP", "MySQL", "Bootstrap"],
        icon: Car,
        description: "Smart ride assignment system with role-based access control.",
        featured: false
    },
    {
        title: "TaskNest",
        category: "Web App",
        tech: ["Web Tech"],
        icon: FolderGit2,
        description: "Web-based task management system inspired by ClickUp.",
        featured: false
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="py-20 md:py-32 px-4 md:px-16 bg-transparent text-foreground relative">
            {/* Background Gradient Blob */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 flex justify-between items-end"
                >
                    <div>
                        <h2 className="text-sm font-mono tracking-widest text-secondary mb-4 uppercase">
                            03. Featured Projects
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white">
                            Selected Works.
                        </h3>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <Card key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const Card = ({ project, index }: { project: any, index: number }) => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            onMouseMove={handleMouseMove}
            className={`group relative bg-zinc-900/80 backdrop-blur-md border border-white/10 overflow-hidden rounded-2xl hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col ${project.featured ? 'md:col-span-2' : 'md:col-span-1'}`}
        >
            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                        650px circle at ${mouseX}px ${mouseY}px,
                        rgba(255,255,255,0.08),
                        transparent 80%
                        )
                    `,
                }}
            />

            <div className="relative p-8 h-full flex flex-col z-10">
                <div className="flex justify-between items-start mb-8">
                    <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10 transition-colors">
                        <project.icon size={24} className="text-zinc-400 group-hover:text-indigo-400 transition-colors" />
                    </div>
                    <ArrowUpRight className="text-zinc-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>

                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                    {project.title}
                </h4>

                <p className="text-zinc-400 text-sm leading-relaxed mb-8 line-clamp-3">
                    {project.description}
                </p>

                <div className="mt-auto pt-6 border-t border-white/10 flex flex-wrap gap-2">
                    {project.tech.map((t: string, i: number) => (
                        <span key={i} className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 bg-white/5 px-2 py-1 rounded hover:bg-white/10 transition-colors">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
