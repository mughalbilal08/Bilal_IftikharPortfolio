"use client";

import { motion } from "framer-motion";

export const About = () => {
    return (
        <section id="about" className="py-20 md:py-32 px-4 md:px-16 bg-background relative overflow-hidden">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-sm font-mono tracking-widest text-secondary mb-8 uppercase">01. Profile</h2>
                    <p className="text-lg md:text-xl font-light leading-relaxed text-gray-300 max-w-3xl">
                        Motivated <span className="text-white font-medium">Data Engineer</span> with hands-on
                        experience in building data pipelines, real-time ingestion
                        systems, and automated analytics workflows using <span className="text-indigo-400">Spark, PySpark, Airflow, DBT, Snowflake</span>, and cloud platforms (Azure + GCP). <br /><br />
                        Skilled in designing scalable data solutions,
                        containerizing workloads with Docker, and developing
                        streaming dashboards using modern cloud-native tools.
                        Passionate about turning raw data into reliable, high
                        impact insights.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
