"use client";

import { Course } from "@/lib/courses";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { formatUSD } from "@/lib/utils";

interface MobileStickyCTAProps {
    course: Course;
}

export function MobileStickyCTA({ course }: MobileStickyCTAProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show bar after user scrolls past the hero section (around 600px)
            if (window.scrollY > 600) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (course.status === "Coming Soon") return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    exit={{ y: 100 }}
                    className="fixed bottom-0 left-0 right-0 z-[60] lg:hidden bg-white border-t border-gray-100 p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.08)] flex items-center justify-between"
                >
                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Limited Enrollment</span>
                        <div className="flex items-center gap-2">
                            <span className="text-xl font-bold text-gray-900">₦{Number(course.price).toLocaleString()}</span>
                            <span className="text-xs text-gray-500">({formatUSD(course.price)})</span>
                            {course.originalPrice && (
                                <span className="text-xs text-gray-400 line-through">₦{Number(course.originalPrice).toLocaleString()}</span>
                            )}
                        </div>
                    </div>

                    <Link href={`/checkout/${course.slug}`}>
                        <Button className="bg-[var(--brand-color)] hover:bg-[var(--brand-color)]/90 text-white font-bold h-12 px-8 rounded-xl shadow-lg shadow-blue-100">
                            Enroll Now
                        </Button>
                    </Link>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
