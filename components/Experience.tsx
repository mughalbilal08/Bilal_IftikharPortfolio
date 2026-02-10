"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        role: "Associate Data Engineer",
        company: "SymuFolk",
        period: "Sep 2025 – Present",
        location: "Lahore, Pakistan",
        description: [
            "Designing and maintaining end-to-end batch and streaming data pipelines using Spark / PySpark and Apache Kafka.",
            "Building production-grade workflows with Apache Airflow for orchestration, simple scheduling, monitoring, and dependency management.",
            "Developing dbt models, transformations, and data quality tests to deliver validated, analytics-ready datasets.",
            "Working with Snowflake to design scalable data warehouses, optimize queries, and manage efficient schema and MART layers.",
            "Implementing containerized environments with Docker to ensure reproducible development."
        ]
    },
    {
        role: "Data Engineering Intern",
        company: "SymuFolk",
        period: "Jul 2025 – Sep 2025",
        location: "Lahore, Pakistan",
        description: [
            "Learned and applied Spark, PySpark, dbt, Airflow, Azure, GCP, Docker, and Snowflake in real-world projects.",
            "Contributed to building cloud-based ETL/ELT pipelines and automating data workflows.",
            "Assisted in data modeling, debugging transformations, and preparing datasets for analytics teams."
        ]
    },
    {
        role: "Internee",
        company: "Shaukat Khanum Memorial Hospital",
        period: "July 2024 – August 2024",
        location: "Lahore, Pakistan",
        description: [
            "Worked on Python automation scripts and supported MIS team in improving workflows.",
            "Helped in managing and querying hospital databases and healthcare systems."
        ]
    }
];

export const Experience = () => {
    return (
        <section id="experience" className="py-20 md:py-32 px-4 md:px-16 bg-white text-foreground">
            <div className="container mx-auto max-w-5xl">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-sm font-mono tracking-widest text-blue-600 mb-16 uppercase font-bold"
                >
                    02. Work Experience
                </motion.h2>

                <div className="space-y-16">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.05, duration: 0.4 }}
                            className="grid md:grid-cols-[1fr_2fr] gap-8 border-b border-zinc-200 pb-16 last:border-0"
                        >
                            <div>
                                <h3 className="text-xl font-bold text-zinc-900">{exp.company}</h3>
                                <p className="text-blue-600 font-medium mt-1">{exp.role}</p>
                                <p className="text-xs text-zinc-500 mt-2 font-mono uppercase tracking-wider">{exp.period}</p>
                            </div>
                            <div>
                                <ul className="space-y-3">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="text-zinc-600 text-sm leading-relaxed pl-4 border-l-2 border-zinc-200">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
