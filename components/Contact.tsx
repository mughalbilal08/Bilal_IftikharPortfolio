"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";

export const Contact = () => {
    return (
        <section id="contact" className="py-20 md:py-32 px-4 md:px-16 bg-background text-foreground relative overflow-hidden">
            <div className="container mx-auto grid md:grid-cols-2 gap-16">

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-sm font-mono tracking-widest text-secondary mb-8 uppercase">
                        05. Get in Touch
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold mb-8">
                        Let's work together.
                    </h3>
                    <p className="text-zinc-400 mb-12 max-w-md leading-relaxed">
                        I'm currently available for freelance projects and open to full-time opportunities.
                        If you have a project that needs some serious engineering, get in touch.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-zinc-300">
                            <Mail className="text-indigo-500" size={20} />
                            <a href="mailto:bilaliftikhar.967@gmail.com" className="hover:text-white transition-colors">
                                bilaliftikhar.967@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-4 text-zinc-300">
                            <Phone className="text-indigo-500" size={20} />
                            <span>++92 347 4060343</span>
                        </div>
                        <div className="flex items-center gap-4 text-zinc-300">
                            <MapPin className="text-indigo-500" size={20} />
                            <span>Lahore, Punjab</span>
                        </div>
                    </div>

                    <div className="flex gap-6 mt-8">
                        <a href="https://www.linkedin.com/in/bilal-iftikhar-26130a262" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://github.com/mughalbilal08" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
                            <Github size={24} />
                        </a>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.form
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#111111] p-8 md:p-12 border border-white/5 space-y-6"
                >
                    <h3 className="text-sm font-mono tracking-widest text-secondary mb-4 uppercase">
                        Contact Form
                    </h3>

                    <div className="space-y-2">
                        <label htmlFor="name" className="text-xs uppercase text-zinc-500 font-bold tracking-wider">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full bg-[#1a1a1a] border-b border-zinc-800 focus:border-indigo-500 text-white p-3 outline-none transition-colors"
                            placeholder="John Doe"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="text-xs uppercase text-zinc-500 font-bold tracking-wider">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full bg-[#1a1a1a] border-b border-zinc-800 focus:border-indigo-500 text-white p-3 outline-none transition-colors"
                            placeholder="john@example.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-xs uppercase text-zinc-500 font-bold tracking-wider">Message</label>
                        <textarea
                            id="message"
                            rows={4}
                            className="w-full bg-[#1a1a1a] border-b border-zinc-800 focus:border-indigo-500 text-white p-3 outline-none transition-colors resize-none"
                            placeholder="Tell me about your project..."
                        />
                    </div>

                    <button className="bg-white text-black font-bold uppercase tracking-wider text-xs py-4 px-8 mt-4 hover:bg-gray-200 transition-colors w-full md:w-auto">
                        Send Message
                    </button>
                </motion.form>
            </div>
        </section>
    );
};
