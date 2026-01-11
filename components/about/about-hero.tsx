"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function AboutHero() {
    return (
        <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-[#0a0c1b] overflow-hidden pt-[12rem]">
            {/* Background Pattern - Abstract Arches using CSS/SVG */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="h-full w-full"
                    style={{
                        backgroundImage: "linear-gradient(to right, rgba(161, 163, 163, 0.3) 1px, transparent 1px)",
                        backgroundSize: "40px 100%"
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0c1b]/50 via-transparent to-[#0a0c1b]" />
            </div>

            <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center max-w-4xl pb-[60px]">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-7xl font-[family-name:var(--font-playfair)] text-white tracking-tight mb-8 leading-tight"
                >
                    We are rethinking education
                    <span className="italic"> for Africa.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl text-center"
                >
                    We connect ambitious learners with world-class practitioners through cohort-based courses that deliver real-world skills, accountability, and measurable outcomes.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Button
                        size="lg"
                        className="bg-[#372772] hover:bg-[#7c3aed] text-white px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg shadow-purple-900/20 cursor-pointer"
                    >
                        Join Our Team
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
