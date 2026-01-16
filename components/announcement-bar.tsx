
"use client";

import Link from "next/link";
import { Sparkles, ArrowRight, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CAMPAIGN_END_DATE } from "@/lib/constants";

export function AnnouncementBar() {
    const [isVisible, setIsVisible] = useState(true);
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    // Target Date from central config
    const TARGET_DATE = new Date(CAMPAIGN_END_DATE).getTime();

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const difference = TARGET_DATE - now;

            if (difference <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            setTimeLeft({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            });
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, []);

    // Don't show if already dismissed in this session
    useEffect(() => {
        const dismissed = sessionStorage.getItem("announcement-dismissed");
        if (dismissed) setIsVisible(false);
    }, []);

    const handleDismiss = () => {
        setIsVisible(false);
        sessionStorage.setItem("announcement-dismissed", "true");
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="relative bg-[#4F70FF] text-white overflow-hidden z-[60]"
                >
                    <div className="container mx-auto px-4 py-2.5 sm:px-6 lg:px-8">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
                                <div className="flex items-center gap-2 text-sm font-medium text-white">
                                    <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
                                    <span>Founding Member Early-Bird: Save 20% on all cohorts!</span>
                                </div>

                                <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-lg border border-white/20">
                                    <span className="text-[10px] uppercase font-bold tracking-wider opacity-80">Ends in:</span>
                                    <div className="flex items-center gap-1.5 font-mono text-xs font-bold leading-none">
                                        <div className="flex flex-col items-center">
                                            <span>{String(timeLeft.days).padStart(2, '0')}d</span>
                                        </div>
                                        <span className="opacity-50">:</span>
                                        <div className="flex flex-col items-center">
                                            <span>{String(timeLeft.hours).padStart(2, '0')}h</span>
                                        </div>
                                        <span className="opacity-50">:</span>
                                        <div className="flex flex-col items-center">
                                            <span>{String(timeLeft.minutes).padStart(2, '0')}m</span>
                                        </div>
                                        <span className="opacity-50">:</span>
                                        <div className="flex flex-col items-center">
                                            <span className="text-yellow-300">{String(timeLeft.seconds).padStart(2, '0')}s</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <Link
                                    href="/courses"
                                    className="group flex items-center gap-1.5 text-xs sm:text-sm font-bold bg-white text-[#4F70FF] hover:bg-gray-100 px-4 py-1.5 rounded-full transition-all shadow-md active:scale-95 whitespace-nowrap"
                                >
                                    Claim Discount
                                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                                </Link>

                                <button
                                    onClick={handleDismiss}
                                    className="p-1 hover:bg-white/10 rounded-full transition-colors hidden lg:block"
                                    aria-label="Dismiss announcement"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Progress bar line (just for aesthetic urgency) */}
                    <div className="absolute bottom-0 left-0 h-[2px] bg-white/30 w-full overflow-hidden">
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: "0%" }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="h-full bg-white w-1/3 blur-sm"
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
