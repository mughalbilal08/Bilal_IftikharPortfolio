"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export const Header = () => {
    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 md:px-16 py-6 mix-blend-difference text-white"
        >
            <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
                BI
            </Link>

            <nav className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase">
                <Link href="#projects" className="hover:text-gray-300 transition-colors">Projects</Link>
                <Link href="#skills" className="hover:text-gray-300 transition-colors">Skills</Link>
                <Link href="#contact" className="hover:text-gray-300 transition-colors">Contact</Link>
            </nav>

            {/* Mobile Menu Icon (Placeholder for now) */}
            <div className="md:hidden">
                {/* Simple Hamburger could go here */}
            </div>
        </motion.header>
    );
};
