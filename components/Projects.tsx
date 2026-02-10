"use client";

import { motion } from "framer-motion";
import { Cloud, Plane, Search, ShoppingCart, Shield, Car, FolderGit2, ArrowUpRight, Github } from "lucide-react";
import React from "react";

const projects = [
    {
        title: "Real-Time Flight Data Streaming",
        category: "Data Engineering",
        tech: ["Kafka", "Spark", "Snowflake", "Power BI"],
        icon: Plane,
        description: "End-to-end Kafka streaming architecture for high-volume aviation data. Fault-tolerant processing with DLQ handling and real-time dashboards.",
        gradient: "from-blue-500 to-cyan-400",
        featured: true
    },
    {
        title: "Weather Insights Dashboard",
        category: "Cloud Engineering",
        tech: ["Azure Event Hubs", "Stream Analytics"],
        icon: Cloud,
        description: "Real-time ingestion system handling weather data via Azure infrastructure.",
        gradient: "from-emerald-500 to-teal-400",
        featured: false
    },
    {
        title: "LinkedIn Job Searcher",
        category: "Data Pipeline",
        tech: ["Spark", "PySpark", "Airflow"],
        icon: Search,
        description: "Automated extraction pipeline processing job data from multiple sources.",
        gradient: "from-orange-500 to-amber-400",
        featured: false
    },
    {
        title: "E-Commerce Analytics Pipeline",
        category: "Analytics Engineering",
        tech: ["Snowflake", "dbt", "Power BI"],
        icon: ShoppingCart,
        description: "Medallion Architecture (Bronze, Silver, Gold) implementation for e-commerce data. Standardized metrics and governance.",
        gradient: "from-purple-500 to-pink-400",
        featured: true
    },
    {
        title: "AI-Driven Secure File Sharing",
        category: "Full Stack + AI",
        tech: ["Django", "Three.js", "AI/ML", "Encryption"],
        icon: Shield,
        description: "Zero Trust file sharing platform with AES encryption and AI-based anomaly detection.",
        gradient: "from-indigo-500 to-violet-400",
        featured: false
    },
    {
        title: "DirectDrive",
        category: "Web App",
        tech: ["PHP", "MySQL", "Bootstrap"],
        icon: Car,
        description: "Smart ride assignment system with role-based access control.",
        gradient: "from-rose-500 to-red-400",
        featured: false
    },
    {
        title: "TaskNest",
        category: "Web App",
        tech: ["Web Tech"],
        icon: FolderGit2,
        description: "Web-based task management system inspired by ClickUp.",
        gradient: "from-cyan-500 to-blue-400",
        featured: false
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="py-20 md:py-32 px-4 md:px-16 bg-slate-50 relative overflow-hidden">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="container mx-auto max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:text-center max-w-3xl mx-auto"
                >
                    <h2 className="text-sm font-mono tracking-widest text-blue-600 mb-4 uppercase font-bold">
                        03. Portfolio
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
                        Featured Projects
                    </h3>
                    <p className="text-zinc-600 leading-relaxed">
                        A selection of data engineering pipelines, cloud architectures, and full-stack applications.
                    </p>
                </motion.div>

                <div className="space-y-24">
                    {projects.map((project, index) => (
                        <Card key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const Card = ({ project, index }: { project: any, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="group relative bg-white rounded-3xl overflow-hidden border border-zinc-100 hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500"
        >
            <div className="grid md:grid-cols-[1fr_2fr] gap-0">
                {/* Visual Side */}
                <div className={`relative h-64 md:h-auto overflow-hidden bg-gradient-to-br ${project.gradient} p-10 flex flex-col justify-between group-hover:scale-[1.02] transition-transform duration-700`}>
                    <div className="relative z-10">
                        <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl inline-flex text-white mb-6 shadow-lg">
                            <project.icon size={32} />
                        </div>
                        <h4 className="text-3xl font-bold text-white leading-tight">
                            {project.title}
                        </h4>
                    </div>

                    <div className="relative z-10 mt-auto">
                        <span className="inline-block px-4 py-2 bg-black/20 backdrop-blur-md rounded-full text-white/90 text-xs font-bold uppercase tracking-widest">
                            {project.category}
                        </span>
                    </div>

                    {/* Decorative Circles */}
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-black/5 rounded-full blur-3xl" />
                </div>

                {/* Content Side */}
                <div className="p-8 md:p-12 flex flex-col justify-center bg-white relative">
                    <p className="text-zinc-600 text-lg leading-relaxed mb-8">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((t: string, i: number) => (
                            <span key={i} className="text-xs font-bold text-zinc-500 bg-zinc-50 px-3 py-1.5 rounded-md border border-zinc-100">
                                {t}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-6 mt-auto">
                        <button className="flex items-center gap-2 text-sm font-bold text-zinc-900 hover:text-blue-600 transition-colors group/btn">
                            View Project
                            <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </button>
                        <button className="flex items-center gap-2 text-sm font-bold text-zinc-500 hover:text-zinc-900 transition-colors">
                            <Github size={18} /> Source Code
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
