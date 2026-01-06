"use client";

import { Course } from "@/lib/courses";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQProps {
    course: Course;
}

export function FAQ({ course }: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    if (!course.faq || course.faq.length === 0) return null;

    return (
        <section className="bg-white">
            <div>
                <h2 className="text-3xl md:text-4xl font-serif text-[#0a0c1b] mb-12">
                    Frequently asked questions
                </h2>

                <div className="space-y-4">
                    {course.faq.map((item, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-2xl bg-white overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="flex w-full items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                            >
                                <span className="text-lg font-medium text-[#0a0c1b] pr-8">
                                    {item.question}
                                </span>
                                {openIndex === index ? (
                                    <ChevronUp className="h-5 w-5 text-gray-400 flex-shrink-0" />
                                ) : (
                                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                                )}
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
