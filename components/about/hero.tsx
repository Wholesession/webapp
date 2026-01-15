"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function AboutHero() {
    return (
        <section className="relative w-full bg-white pt-32 pb-24 overflow-hidden font-body">
            {/* Background Geometric Lines - Abstract representation of the image's lines */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-100 400 L400 -100" stroke="#000" strokeWidth="1" />
                    <path d="M1040 -100 L1540 400" stroke="#000" strokeWidth="1" />
                    <circle cx="200" cy="200" r="300" stroke="#000" strokeWidth="0.5" strokeDasharray="4 4" />
                    <circle cx="1240" cy="200" r="300" stroke="#000" strokeWidth="0.5" strokeDasharray="4 4" />
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center sm:px-6 lg:px-8">
                {/* Pill Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <span className="px-4 py-1.5 rounded-full border border-gray-200 text-xs font-medium uppercase tracking-wider text-gray-500 bg-gray-50">
                        Our mission
                    </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-[#0a0c1b] mb-10 max-w-5xl mx-auto"
                >
                    THE WHOLESESSION REVOLUTION.
                </motion.h1>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-20"
                >
                    <Link
                        href="/courses"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#4F70FF] text-white font-medium hover:bg-[#3B5BDB] transition-all duration-300 shadow-lg shadow-blue-500/20"
                    >
                        View Courses
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </motion.div>

                {/* Story Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed"
                >
                    <p>
                        At Wholesession, we're more than just an ed-tech company; we're establishing a new standard in technical education. Our journey didn't start in a classroom but in the trenches of production engineering. As product practitioners, we experienced firsthand the gap between theory and the complexity of real-world systems. We decided to create a hands-on solution that transforms juniors into seniors.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
