"use client";

import { motion } from "framer-motion";

const skills = [
    {
        category: "Data Engineering",
        items: ["Apache Spark", "PySpark", "Apache Kafka", "Airflow", "dbt"]
    },
    {
        category: "Cloud & Warehousing",
        items: ["Snowflake", "Databricks", "Azure (Event Hubs, Stream Analytics)", "GCP BigQuery"]
    },
    {
        category: "Languages & Tools",
        items: ["Python", "SQL", "Docker", "Git", "APIs"]
    }
];

export const Skills = () => {
    return (
        <section id="skills" className="py-20 md:py-32 px-4 md:px-16 bg-white/5 backdrop-blur-sm border-t border-white/5">
            <div className="container mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-sm font-mono tracking-widest text-secondary mb-16 uppercase"
                >
                    04. Technical Skills
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.05, duration: 0.4 }}
                        >
                            <h3 className="text-lg font-bold text-white mb-6 border-b border-indigo-500/30 pb-2 inline-block">
                                {skillGroup.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skillGroup.items.map((item, i) => (
                                    <span key={i} className="bg-black/40 text-zinc-300 text-sm px-4 py-2 border border-white/10 hover:border-indigo-500/50 transition-colors">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
