"use client";

import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative flex min-h-[600px] items-center bg-[#372772] pt-32 pb-16 overflow-hidden">
            {/* Background Vertical Lines */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="h-full w-full"
                    style={{
                        backgroundImage: "linear-gradient(to right, rgba(161, 163, 163, 0.3) 1px, transparent 1px)",
                        backgroundSize: "40px 100%"
                    }}
                />
                {/* Subtle gradient overlay to fade out lines at edges if needed, or add depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0c1b]/50 via-transparent to-[#0a0c1b]" />
            </div>

            <div className="relative z-10 mx-auto max-w-[1150px] px-4 sm:px-6 lg:px-8 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl"
                >
                    <h1 className="font-serif text-5xl font-normal tracking-tight text-white sm:text-7xl md:text-8xl w-full">
                        Elite instructors. Real outcomes.
                    </h1>
                    <p className="mt-6 text-xl text-gray-300 sm:text-2xl font-light">
                        World-class STEM courses taught live by elite engineers, researchers, and practitioners — built for Africans who want to compete globally.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
