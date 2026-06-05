"use client";

import { ScrollReveal } from "./ScrollReveal";

export const About = () => {
    return (
        <section id="about" className="py-20 md:py-32 px-4 md:px-16 bg-zinc-50 relative overflow-hidden">
            <div className="container mx-auto max-w-4xl">
                <ScrollReveal>
                    <h2 className="text-sm font-mono tracking-widest text-blue-600 mb-8 uppercase font-bold">01. Profile</h2>
                    <p className="text-lg md:text-xl font-light leading-relaxed text-zinc-700 max-w-3xl">
                        Motivated <span className="text-zinc-900 font-bold">Data Engineer</span> with hands-on
                        experience in building data pipelines, real-time ingestion
                        systems, and automated analytics workflows using <span className="text-blue-600 font-semibold">Spark, PySpark, Airflow, DBT, Snowflake</span>, and cloud platforms (Azure + AWS). <br /><br />
                        Skilled in designing scalable data solutions,
                        containerizing workloads with Docker, and developing
                        streaming dashboards using modern cloud-native tools.
                        Passionate about turning raw data into reliable, high
                        impact insights.
                    </p>
                </ScrollReveal>
            </div>
        </section>
    );
};
