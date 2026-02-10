"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";

export const Contact = () => {
    return (
        <section id="contact" className="py-20 md:py-32 px-4 md:px-16 bg-zinc-50 text-foreground relative overflow-hidden">
            <div className="container mx-auto grid md:grid-cols-2 gap-16">

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-sm font-mono tracking-widest text-blue-600 mb-8 uppercase font-bold">
                        05. Get in Touch
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-bold mb-8 text-zinc-900">
                        Let's work together.
                    </h3>
                    <p className="text-zinc-600 mb-12 max-w-md leading-relaxed">
                        I'm currently available for freelance projects and open to full-time opportunities.
                        If you have a project that needs some serious engineering, get in touch.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-zinc-600">
                            <Mail className="text-blue-600" size={20} />
                            <a href="mailto:bilaliftikhar.967@gmail.com" className="hover:text-blue-600 transition-colors">
                                bilaliftikhar.967@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-4 text-zinc-600">
                            <Phone className="text-blue-600" size={20} />
                            <span>++92 347 4060343</span>
                        </div>
                        <div className="flex items-center gap-4 text-zinc-600">
                            <MapPin className="text-blue-600" size={20} />
                            <span>Lahore, Punjab</span>
                        </div>
                    </div>

                    <div className="flex gap-6 mt-8">
                        <a href="https://www.linkedin.com/in/bilal-iftikhar-26130a262" target="_blank" className="text-zinc-400 hover:text-blue-600 transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://github.com/mughalbilal08" target="_blank" className="text-zinc-400 hover:text-blue-600 transition-colors">
                            <Github size={24} />
                        </a>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.form
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 md:p-12 border border-zinc-100 shadow-xl rounded-2xl space-y-6"
                >
                    <h3 className="text-sm font-mono tracking-widest text-zinc-500 mb-4 uppercase">
                        Contact Form
                    </h3>

                    <div className="space-y-2">
                        <label htmlFor="name" className="text-xs uppercase text-zinc-500 font-bold tracking-wider">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full bg-zinc-50 border-b border-zinc-200 focus:border-blue-500 text-zinc-900 p-3 outline-none transition-colors"
                            placeholder="John Doe"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="text-xs uppercase text-zinc-500 font-bold tracking-wider">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full bg-zinc-50 border-b border-zinc-200 focus:border-blue-500 text-zinc-900 p-3 outline-none transition-colors"
                            placeholder="john@example.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-xs uppercase text-zinc-500 font-bold tracking-wider">Message</label>
                        <textarea
                            id="message"
                            rows={4}
                            className="w-full bg-zinc-50 border-b border-zinc-200 focus:border-blue-500 text-zinc-900 p-3 outline-none transition-colors resize-none"
                            placeholder="Tell me about your project..."
                        />
                    </div>

                    <button className="bg-zinc-900 text-white font-bold uppercase tracking-wider text-xs py-4 px-8 mt-4 hover:bg-blue-600 transition-colors w-full md:w-auto rounded-lg shadow-lg shadow-blue-500/20">
                        Send Message
                    </button>
                </motion.form>
            </div>
        </section>
    );
};
