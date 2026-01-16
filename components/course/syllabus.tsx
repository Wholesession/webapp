"use client";

import { Course } from "@/lib/courses";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, FileCode, Video, BookOpen } from "lucide-react";

interface SyllabusProps {
    course: Course;
}

export function Syllabus({ course }: SyllabusProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    if (!course.syllabus || course.syllabus.length === 0) return null;

    return (
        <section className="bg-white font-body" id="syllabus">
            <div>
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-body text-[#0a0c1b] mb-4">
                        Curriculum Breakdown
                    </h2>
                    <p className="text-lg text-gray-600">
                        {course.duration} of intense, hands-on practice breakdown
                    </p>
                </div>

                <div className="space-y-4">
                    {course.syllabus.map((module, index) => (
                        <div
                            key={index}
                            className={`border rounded-xl transition-all duration-300 ${openIndex === index
                                ? "border-gray-200 bg-gray-50/50 shadow-sm"
                                : "border-gray-200"
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="flex w-full items-center justify-between p-6 text-left cursor-pointer"
                            >
                                <div className="flex items-center gap-4">
                                    <span className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${openIndex === index ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-500"
                                        }`}>
                                        {index + 1}
                                    </span>
                                    <div>
                                        <h3 className={`text-lg font-semibold font-body ${openIndex === index ? "text-[#0a0c1b]" : "text-gray-700"}`}>
                                            {module.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 mt-1">{module.description}</p>
                                    </div>
                                </div>
                                {openIndex === index ? (
                                    <ChevronUp className="h-5 w-5 text-[#0a0c1b]" />
                                ) : (
                                    <ChevronDown className="h-5 w-5 text-[#0a0c1b]" />
                                )}
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 pl-20">
                                            <div className="border-l-2 border-gray-100 pl-6 space-y-4">
                                                <div>
                                                    <h4 className="text-sm font-semibold font-body text-gray-900 uppercase tracking-wide mb-3">Topics Covered</h4>
                                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                                        {module.topics.map((topic, i) => (
                                                            <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                                                                <div className="w-1.5 h-1.5 rounded-full bg-gray-700" />
                                                                {topic}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
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
