"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, TrendingUp, X } from "lucide-react";

interface InterestPulseProps {
    courseSlug: string;
    cohortSize: number;
}

export function InterestPulse({ courseSlug, cohortSize }: InterestPulseProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Show after a short delay
        const timer = setTimeout(() => {
            // Smart Simulation: Calculate a number between 70% and 94% of cohort size
            // This creates the "Almost Full" feeling without exceeding the real limit
            const min = Math.floor(cohortSize * 0.7);
            const max = Math.floor(cohortSize * 0.94);
            const simulatedCount = Math.floor(Math.random() * (max - min + 1)) + min;

            setCount(simulatedCount);
            setIsVisible(true);
        }, 5000);

        // Hide after 8 seconds
        const hideTimer = setTimeout(() => {
            setIsVisible(false);
        }, 13000);

        return () => {
            clearTimeout(timer);
            clearTimeout(hideTimer);
        };
    }, [courseSlug]);

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: -20, scale: 0.95 }}
                className="fixed bottom-24 left-6 z-[40] max-w-[280px]"
            >
                <div className="bg-white rounded-2xl p-4 shadow-xl border border-gray-100 flex items-start gap-3 relative overflow-hidden group">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50/50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />

                    <div className="bg-blue-100 p-2 rounded-xl relative z-10">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                    </div>

                    <div className="flex-1 pr-4 relative z-10">
                        <p className="text-sm font-bold text-gray-900 leading-tight">
                            High demand for this cohort!
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                            <span className="text-blue-600 font-bold">{count} professionals</span> are already on the waitlist for this intake.
                        </p>
                    </div>

                    <button
                        onClick={() => setIsVisible(false)}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors absolute top-2 right-2"
                    >
                        <X className="w-3 h-3 text-gray-400" />
                    </button>

                    {/* Progress bar line for curiosity */}
                    <div className="absolute bottom-0 left-0 h-1 bg-blue-100 w-full" />
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 8, ease: "linear" }}
                        className="absolute bottom-0 left-0 h-1 bg-blue-500"
                    />
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
