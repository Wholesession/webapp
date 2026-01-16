"use client";

import { Course } from "@/lib/courses";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

interface ResonanceSectionProps {
    course: Course;
}

export function ResonanceSection({ course }: ResonanceSectionProps) {
    if (!course.notForYou || course.notForYou.length === 0) return null;

    return (
        <section className="py-20 font-body">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16 px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Is this the right fit for you?
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Wholesession cohorts are intensive and high-level. We want to ensure you're in the right room to get the most out of this experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                    {/* Ideal For */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-[2rem] p-8 md:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center mb-8">
                            <Check className="w-6 h-6 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 font-body">Ideal for you if...</h3>
                        <ul className="space-y-5">
                            {course.targetAudience.map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-500" />
                                    <span className="text-gray-700 leading-snug">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Not For */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 rounded-[2rem] p-8 md:p-10 border border-transparent"
                    >
                        <div className="w-12 h-12 bg-gray-200 rounded-2xl flex items-center justify-center mb-8">
                            <X className="w-6 h-6 text-gray-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 font-body">Not for you if...</h3>
                        <ul className="space-y-5">
                            {course.notForYou.map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400" />
                                    <span className="text-gray-500 leading-snug">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
