"use client";

import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

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
        <section id="skills" className="py-20 md:py-32 px-4 md:px-16 bg-white border-t border-zinc-100">
            <div className="container mx-auto">
                <ScrollReveal direction="right">
                    <h2 className="text-sm font-mono tracking-widest text-blue-600 mb-16 uppercase font-bold">
                        04. Technical Skills
                    </h2>
                </ScrollReveal>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {skills.map((skillGroup, index) => (
                        <StaggerItem key={index}>
                            <h3 className="text-lg font-bold text-zinc-900 mb-6 border-b border-blue-200 pb-2 inline-block">
                                {skillGroup.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skillGroup.items.map((item, i) => (
                                    <span key={i} className="bg-white text-zinc-600 text-sm px-4 py-2 border border-zinc-200 rounded-lg hover:border-blue-400 hover:text-blue-600 transition-colors shadow-sm">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
};
