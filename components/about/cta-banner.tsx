"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutCTA() {
    return (
        <section className="relative py-32 bg-[#4F70FF] overflow-hidden font-body text-center">
            {/* Dynamic Background Effect - Sunburst/Radial Lines */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] opacity-20">
                    <svg viewBox="0 0 1000 1000" className="w-full h-full animate-spin-slow">
                        {Array.from({ length: 24 }).map((_, i) => (
                            <line
                                key={i}
                                x1="500"
                                y1="500"
                                x2={500 + 1000 * Math.cos((i * 15 * Math.PI) / 180)}
                                y2={500 + 1000 * Math.sin((i * 15 * Math.PI) / 180)}
                                stroke="white"
                                strokeWidth="2"
                                strokeDasharray="20 40"
                            />
                        ))}
                    </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#4F70FF]/0 via-[#4F70FF]/0 to-[#4F70FF]/50" />
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-white text-5xl md:text-7xl font-bold tracking-tighter mb-4"
                >
                    JOIN WHOLESESSION.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-white/80 text-xl md:text-2xl mb-10 max-w-2xl mx-auto"
                >
                    Let's democratize technical excellence together.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Link
                        href="/courses"
                        className="inline-flex items-center gap-2 bg-white text-[#4F70FF] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl"
                    >
                        Enroll Now
                        <ArrowRight size={20} />
                    </Link>
                </motion.div>
            </div>

            <style jsx>{`
        .animate-spin-slow {
            animation: spin 60s linear infinite;
        }
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    `}</style>
        </section>
    );
}
