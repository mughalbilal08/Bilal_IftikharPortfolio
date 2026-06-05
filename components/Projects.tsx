"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
    Cloud,
    Plane,
    Search,
    ShoppingCart,
    Shield,
    Car,
    FolderGit2,
    ArrowUpRight,
    Database,
    Code2,
    Rocket,
    type LucideIcon,
} from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const ProjectsBackground = dynamic(() => import("./three/ProjectsBackground"), {
    ssr: false,
});

type ProjectCategory = "data-engineering" | "software-development";

interface Project {
    title: string;
    section: ProjectCategory;
    tech: string[];
    icon: LucideIcon;
    description: string;
    iconBg: string;
    iconColor: string;
    gradient?: string;
}

const projects: Project[] = [
    {
        title: "Real-Time Flight Data Streaming",
        section: "data-engineering",
        tech: ["Kafka", "Spark", "Snowflake", "Power BI"],
        icon: Plane,
        description:
            "End-to-end Kafka streaming architecture for high-volume aviation data. Fault-tolerant processing with DLQ handling and real-time dashboards.",
        iconBg: "bg-blue-50",
        iconColor: "text-blue-600",
    },
    {
        title: "Weather Insights Dashboard",
        section: "data-engineering",
        tech: ["Azure Event Hubs", "Stream Analytics"],
        icon: Cloud,
        description:
            "Real-time ingestion system handling weather data via Azure infrastructure.",
        iconBg: "bg-purple-50",
        iconColor: "text-purple-600",
    },
    {
        title: "LinkedIn Job Searcher",
        section: "data-engineering",
        tech: ["Spark", "PySpark", "Airflow"],
        icon: Search,
        description:
            "Automated extraction pipeline processing job data from multiple sources.",
        iconBg: "bg-orange-50",
        iconColor: "text-orange-600",
    },
    {
        title: "E-Commerce Analytics Pipeline",
        section: "data-engineering",
        tech: ["Snowflake", "dbt", "Power BI"],
        icon: ShoppingCart,
        description:
            "Medallion Architecture (Bronze, Silver, Gold) implementation for e-commerce data. Standardized metrics and governance.",
        iconBg: "bg-emerald-50",
        iconColor: "text-emerald-600",
    },
    {
        title: "AI-Driven Secure File Sharing",
        section: "software-development",
        tech: ["Django", "Three.js", "AI/ML", "Encryption"],
        icon: Shield,
        description:
            "Zero Trust file sharing platform with AES encryption and AI-based anomaly detection.",
        iconBg: "bg-red-50",
        iconColor: "text-red-600",
        gradient: "from-red-500 to-rose-400",
    },
    {
        title: "DirectDrive",
        section: "software-development",
        tech: ["PHP", "MySQL", "Bootstrap"],
        icon: Car,
        description:
            "Smart ride assignment system with role-based access control.",
        iconBg: "bg-indigo-50",
        iconColor: "text-indigo-600",
        gradient: "from-indigo-500 to-violet-400",
    },
    {
        title: "TaskNest",
        section: "software-development",
        tech: ["Web Tech"],
        icon: FolderGit2,
        description:
            "Web-based task management system inspired by ClickUp.",
        iconBg: "bg-cyan-50",
        iconColor: "text-cyan-600",
        gradient: "from-cyan-500 to-blue-400",
    },
];

const filters: { id: ProjectCategory; label: string; icon: LucideIcon }[] = [
    { id: "data-engineering", label: "Data Engineering", icon: Database },
    { id: "software-development", label: "Software Development", icon: Code2 },
];

export const Projects = () => {
    const [activeCategory, setActiveCategory] = useState<ProjectCategory>("data-engineering");

    const filteredProjects = projects.filter((p) => p.section === activeCategory);

    return (
        <section id="projects" className="py-20 md:py-32 px-4 md:px-16 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-40">
                <ProjectsBackground />
            </div>
            <div
                className="absolute inset-0 z-0 opacity-[0.04]"
                style={{
                    backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                }}
            />

            <div className="container mx-auto max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 md:text-center max-w-3xl mx-auto"
                >
                    <h2 className="text-sm font-mono tracking-widest text-violet-600 mb-4 uppercase font-bold">
                        My Work
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
                        Projects
                    </h3>
                    <p className="text-zinc-600 leading-relaxed">
                        A collection of data engineering solutions and software applications
                        I&apos;ve built to solve real-world problems.
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {filters.map(({ id, label, icon: Icon }) => {
                        const isActive = activeCategory === id;
                        return (
                            <button
                                key={id}
                                onClick={() => setActiveCategory(id)}
                                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border backdrop-blur-sm ${
                                    isActive
                                        ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/30 scale-105"
                                        : "bg-white/80 text-zinc-700 border-zinc-200 hover:border-blue-200 hover:bg-white hover:shadow-md"
                                }`}
                            >
                                <Icon size={16} />
                                {label}
                            </button>
                        );
                    })}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.3 }}
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {filteredProjects.map((project, index) => (
                            <ProjectCard
                                key={project.title}
                                project={project}
                                index={index}
                                variant={activeCategory}
                            />
                        ))}
                    </motion.div>
                </AnimatePresence>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 rounded-2xl bg-gradient-to-r from-violet-50 to-blue-50 border border-violet-100/80 backdrop-blur-sm p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg shadow-violet-500/5"
                >
                    <div className="flex items-center gap-4 text-center md:text-left">
                        <div className="hidden sm:flex bg-violet-100 p-3 rounded-xl text-violet-600">
                            <Rocket size={24} />
                        </div>
                        <p className="text-zinc-700 font-medium text-lg">
                            Have an idea in mind? Let&apos;s build something amazing together.
                        </p>
                    </div>
                    <Link
                        href="#contact"
                        className="inline-flex items-center gap-2 bg-violet-600 text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-violet-700 transition-colors shadow-lg shadow-violet-600/20 whitespace-nowrap"
                    >
                        Get In Touch
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

const ProjectCard = ({
    project,
    index,
    variant,
}: {
    project: Project;
    index: number;
    variant: ProjectCategory;
}) => {
    const Icon = project.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="group bg-white/80 backdrop-blur-md rounded-2xl border border-white/60 p-6 hover:border-blue-200/80 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col"
        >
            <div className="flex items-start gap-4 mb-5">
                {variant === "software-development" && project.gradient ? (
                    <div className="relative flex-shrink-0">
                        <div
                            className={`absolute left-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b ${project.gradient}`}
                        />
                        <div className={`ml-3 p-3 rounded-xl ${project.iconBg}`}>
                            <Icon size={22} className={project.iconColor} />
                        </div>
                    </div>
                ) : (
                    <div className={`p-3 rounded-xl ${project.iconBg} flex-shrink-0`}>
                        <Icon size={22} className={project.iconColor} />
                    </div>
                )}
                <h4 className="text-lg font-bold text-zinc-900 leading-snug pt-1">
                    {project.title}
                </h4>
            </div>

            <p className="text-zinc-600 text-sm leading-relaxed mb-5 flex-grow">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                    <span
                        key={t}
                        className="text-xs font-medium text-zinc-500 bg-zinc-50 px-2.5 py-1 rounded-md border border-zinc-100"
                    >
                        {t}
                    </span>
                ))}
            </div>

            <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group/btn mt-auto">
                View Project
                <ArrowUpRight
                    size={16}
                    className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                />
            </button>
        </motion.div>
    );
};
