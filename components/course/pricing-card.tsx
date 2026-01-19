"use client";

import { Course } from "@/lib/courses";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Star, ArrowRight, ShieldCheck, Flame } from "lucide-react";
import Link from "next/link";
import { WaitlistForm } from "./waitlist-form";
import { formatUSD } from "@/lib/utils";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Info, X } from "lucide-react";

interface PricingCardProps {
    course: Course;
}

export function PricingCard({ course }: PricingCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="sticky top-24 bg-white shadow-lg border border-gray-100 font-body relative rounded-2xl">
            <div className="p-6 space-y-6">
                {/* Header: Price & Rating */}
                {course.status !== "Coming Soon" && (
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                            <span className="text-3xl font-bold font-body text-gray-900">₦{Number(course.price).toLocaleString()}</span>
                            <span className="text-sm text-gray-500">({formatUSD(course.price)})</span>
                            {course.originalPrice && Number(course.originalPrice) > Number(course.price) && (
                                <span className="text-gray-400 line-through text-sm font-medium italic">₦{Number(course.originalPrice).toLocaleString()}</span>
                            )}
                        </div>
                        {course.originalPrice && Number(course.originalPrice) > Number(course.price) && (
                            <span className="text-green-600 text-xs font-bold uppercase tracking-wider">Save ₦{(Number(course.originalPrice) - Number(course.price)).toLocaleString()} today</span>
                        )}
                    </div>
                )}

                <div>
                    <h4 className="text-xs font-bold font-body text-gray-400 uppercase tracking-wider mb-2">Next Cohort</h4>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-gray-900 font-semibold">{course.startDate} — {course.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            {course.status !== "Coming Soon" && (
                                <span className="bg-orange-100 text-orange-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase flex items-center gap-1">
                                    <Flame className="w-3 h-3" />
                                    Only {Math.floor(Math.random() * 3) + 2} spots left
                                </span>
                            )}
                            <span className="bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                                Closing Soon
                            </span>
                        </div>
                    </div>
                </div>

                {/* Primary CTA */}
                {course.status === "Coming Soon" ? (
                    <WaitlistForm courseSlug={course.slug} courseTitle={course.title} />
                ) : (
                    <Link href={`/checkout/${course.slug}`}>
                        <Button className="w-full bg-[var(--brand-color)] hover:bg-[var(--brand-color)]/90 text-white text-lg font-semibold py-6 rounded-lg transition-colors cursor-pointer font-body">
                            Pay & Enroll
                        </Button>
                    </Link>
                )}
            </div>

            {/* Footer Guarantee */}
            <div className="bg-gray-50 px-6 py-4 flex items-center justify-center gap-2 border-t border-gray-100 relative">
                <ShieldCheck className="w-5 h-5 text-gray-400" />
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                >
                    Covered by the <span className="underline decoration-gray-300">WholeSession Guarantee</span>
                </button>

                {/* Guarantee Modal/Popover */}
                <AnimatePresence>
                    {isModalOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsModalOpen(false)}
                                className="fixed inset-0 bg-black/20 z-40 backdrop-blur-[2px]"
                            />
                            {/* Modal */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                className="absolute bottom-full left-4 right-4 mb-2 bg-white rounded-2xl shadow-2xl border border-gray-200 p-5 z-50"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <div className="bg-green-50 p-2 rounded-full">
                                        <ShieldCheck className="w-5 h-5 text-green-600" />
                                    </div>
                                    <button
                                        onClick={() => setIsModalOpen(false)}
                                        className="text-gray-400 hover:text-gray-600 p-1 cursor-pointer"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">The WholeSession Guarantee</h3>
                                <div className="space-y-3">
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        We are committed to your growth. If you are not satisfied with the course quality within the first two weeks of the cohort, we offer a <span className="font-semibold text-gray-900">100% money-back guarantee</span>.
                                    </p>
                                    <div className="bg-gray-50 rounded-lg p-3 border border-gray-100 italic text-[11px] text-gray-500">
                                        "Simply request a refund within the first 7 days of the cohort start date if the sessions don't meet your expectations."
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
