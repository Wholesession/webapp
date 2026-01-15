"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const sections = [
    {
        titulo: "Our Mission",
        id: "mission",
        text: "We aim to radically transform tech education by bridging the gap between theory and production. We believe that the best way to learn is by doing—building real systems, facing real failures, and solving real problems under the mentorship of those who have done it before.",
    },
    {
        titulo: "Our Vision",
        id: "vision",
        text: "To build a world where anyone with the drive can reach the highest levels of technical engineering. We envision a community where knowledge flows freely from seniors to juniors, creating a continuous cycle of growth and innovation across the global tech ecosystem.",
    },
    {
        titulo: "Our Values",
        id: "values",
        text: "Excellence in every line of code. Transparency in our teaching. Community in our growth. We value practical skills over theoretical knowledge, and we believe that true mastery comes from deep, hands-on experience and the courage to tackle complex challenges.",
    },
];

// Reusable Gradient Defs
const GradientDefs = () => (
    <defs>
        <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4F70FF" />
            <stop offset="100%" stopColor="#d338ce" />
        </linearGradient>
        <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
    </defs>
);

const MissionVisual = () => (
    <svg viewBox="0 0 400 400" className="w-full h-full">
        <GradientDefs />
        {/* Base Static Ring */}
        <circle cx="200" cy="200" r="140" stroke="#333" strokeWidth="1" fill="none" opacity="0.3" />
        <circle cx="200" cy="200" r="40" stroke="#333" strokeWidth="1" fill="none" opacity="0.3" />

        {/* MISSION CORE */}
        <motion.g initial={{ opacity: 0.8 }} animate={{ opacity: 1 }}>
            {[1, 2, 3].map((i) => (
                <motion.circle
                    key={`mission-${i}`}
                    cx="200" cy="200" r={40 + i * 20}
                    stroke="url(#glowGradient)" strokeWidth="1.5" fill="none"
                    initial={{ opacity: 0.5 }}
                    animate={{
                        r: [40 + i * 20, 50 + i * 20, 40 + i * 20],
                        opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{ duration: 3, delay: i * 0.2, repeat: Infinity, ease: "easeInOut" }}
                />
            ))}
            <motion.circle cx="200" cy="200" r="12" fill="url(#glowGradient)" filter="url(#glow)" />
        </motion.g>
    </svg>
);

const VisionVisual = () => (
    <svg viewBox="0 0 400 400" className="w-full h-full">
        <GradientDefs />
        <circle cx="200" cy="200" r="140" stroke="#333" strokeWidth="1" fill="none" opacity="0.3" />

        {/* VISION SCOPE */}
        <motion.g initial={{ opacity: 0.8 }} animate={{ opacity: 1 }}>
            <motion.line
                x1="200" y1="200" x2="200" y2="60"
                stroke="url(#glowGradient)" strokeWidth="2" strokeLinecap="round"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                style={{ originX: "200px", originY: "200px" }}
            />
            <motion.path
                d="M 200 60 A 140 140 0 0 1 340 200"
                stroke="url(#glowGradient)" strokeWidth="1" fill="none" opacity="0.4"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                style={{ originX: "200px", originY: "200px" }}
            />
            {[1, 2].map((i) => (
                <motion.circle
                    key={`vision-${i}`}
                    cx="200" cy="200" r="40"
                    stroke="url(#glowGradient)" strokeWidth="1" fill="none"
                    animate={{ r: [40, 140], opacity: [0.8, 0] }}
                    transition={{ duration: 3, delay: i * 1.5, repeat: Infinity, ease: "easeOut" }}
                />
            ))}
        </motion.g>
    </svg>
);

const ValuesVisual = () => (
    <svg viewBox="0 0 400 400" className="w-full h-full">
        <GradientDefs />
        <circle cx="200" cy="200" r="140" stroke="#333" strokeWidth="1" fill="none" opacity="0.3" />

        {/* VALUES ALIGNMENT */}
        <motion.g initial={{ opacity: 0.8 }} animate={{ opacity: 1 }}>
            {[0, 120, 240].map((angle, i) => (
                <motion.ellipse
                    key={`values-${i}`}
                    cx="200" cy="200" rx="60" ry="100"
                    stroke="url(#glowGradient)" strokeWidth="1.5" fill="none" opacity="0.8"
                    animate={{ rotate: [angle, angle + 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{ originX: "200px", originY: "200px" }}
                />
            ))}
            <circle cx="200" cy="200" r="80" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" fill="none" opacity="0.5" />
            <motion.circle cx="200" cy="200" r="4" fill="white" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
        </motion.g>
    </svg>
);

export function MissionVisionValues() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeSection, setActiveSection] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // Desktop switch thresholds
        if (latest < 0.35) setActiveSection(0);
        else if (latest < 0.7) setActiveSection(1);
        else setActiveSection(2);
    });

    return (
        <section ref={containerRef} className="bg-black text-white font-body relative">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row sm:px-6 lg:px-8">

                {/* Left Side: Content Flow */}
                <div className="w-full lg:w-1/2 py-16 lg:py-24 lg:pb-[30vh]">
                    <div className="space-y-24 lg:space-y-[40vh]">
                        {sections.map((section, index) => (
                            <motion.div
                                key={section.id}
                                initial={{ opacity: 0.8 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col justify-center min-h-[auto] lg:min-h-[40vh]"
                            >
                                {/* MOBILE ONLY: Inline Visual */}
                                <div className="lg:hidden w-full h-[300px] mb-8 flex items-center justify-center relative">
                                    {/* Glow Background */}
                                    <div className="absolute w-[250px] h-[250px] bg-[#4F70FF]/10 blur-[60px] rounded-full" />
                                    {index === 0 && <MissionVisual />}
                                    {index === 1 && <VisionVisual />}
                                    {index === 2 && <ValuesVisual />}
                                </div>

                                <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white text-center lg:text-left">{section.titulo}</h2>
                                <p className="text-lg text-gray-400 leading-relaxed max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                                    {section.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Sticky Desktop Visual */}
                <div className="hidden lg:block w-1/2 h-screen sticky top-0">
                    <div className="w-full h-full flex items-center justify-center relative">
                        {/* Background Glow */}
                        <div className="absolute w-[400px] h-[400px] bg-[#4F70FF]/10 blur-[80px] rounded-full" />

                        {/* Container for absolute positioned visuals to crossfade */}
                        <div className="relative w-[500px] h-[500px]">
                            <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeSection === 0 ? 'opacity-100' : 'opacity-0 scale-95'}`}>
                                <MissionVisual />
                            </div>
                            <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeSection === 1 ? 'opacity-100' : 'opacity-0 scale-95'}`}>
                                <VisionVisual />
                            </div>
                            <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeSection === 2 ? 'opacity-100' : 'opacity-0 scale-95'}`}>
                                <ValuesVisual />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
