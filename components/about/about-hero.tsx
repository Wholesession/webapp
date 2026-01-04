"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function AboutHero() {
    return (
        <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-[#0a0c1b] overflow-hidden pt-[12rem]">
            {/* Background Pattern - Abstract Arches using CSS/SVG */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <svg
                    className="absolute w-full h-full"
                    viewBox="0 0 1440 800"
                    preserveAspectRatio="xMidYMid slice"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M-100 800 V 400 Q 180 100 460 400 V 800"
                        stroke="white"
                        strokeWidth="1.5"
                        fill="url(#gradient)"
                        className="opacity-30"
                    />
                    <path
                        d="M-80 800 V 410 Q 180 120 440 410 V 800"
                        stroke="white"
                        strokeWidth="1"
                        className="opacity-20"
                    />
                    <path
                        d="M-60 800 V 420 Q 180 140 420 420 V 800"
                        stroke="white"
                        strokeWidth="1"
                        className="opacity-20"
                    />

                    {/* Center Arch */}
                    <path
                        d="M300 800 V 300 Q 720 -100 1140 300 V 800"
                        stroke="white"
                        strokeWidth="1.5"
                        className="opacity-40"
                    />
                    <path
                        d="M320 800 V 310 Q 720 -80 1120 310 V 800"
                        stroke="white"
                        strokeWidth="1"
                        className="opacity-30"
                    />
                    <path
                        d="M340 800 V 320 Q 720 -60 1100 320 V 800"
                        stroke="white"
                        strokeWidth="1"
                        className="opacity-30"
                    />
                    <path
                        d="M360 800 V 330 Q 720 -40 1080 330 V 800"
                        stroke="white"
                        strokeWidth="1"
                        className="opacity-25"
                    />

                    {/* Right Arch */}
                    <path
                        d="M980 800 V 400 Q 1260 100 1540 400 V 800"
                        stroke="white"
                        strokeWidth="1.5"
                        className="opacity-30"
                    />
                    <path
                        d="M1000 800 V 410 Q 1260 120 1520 410 V 800"
                        stroke="white"
                        strokeWidth="1"
                        className="opacity-20"
                    />
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Vertical Lines Overlay Texture - Simplified simulation of reference */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                        backgroundSize: '20px 100%'
                    }}
                />
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
