"use client";

import { Course } from "@/lib/courses";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SyllabusProps {
    course: Course;
}

export function Syllabus({ course }: SyllabusProps) {
    const [openModule, setOpenModule] = useState<number | null>(0);

    return (
        <section className="py-24 bg-white">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-serif font-medium text-gray-900 mb-4">
                        Course Curriculum
                    </h2>
                    <p className="text-lg text-gray-600">
                        A {course.duration} comprehensive journey to mastery.
                    </p>
                </div>

                <div className="space-y-4">
                    {course.syllabus.map((module, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50/50"
                        >
                            <button
                                onClick={() => setOpenModule(openModule === index ? null : index)}
                                className="flex w-full items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm font-medium text-white">
                                        {index + 1}
                                    </span>
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900">
                                            {module.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 mt-1">
                                            {module.description}
                                        </p>
                                    </div>
                                </div>
                                <ChevronDown
                                    className={`h-5 w-5 text-gray-400 transition-transform ${openModule === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <AnimatePresence>
                                {openModule === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="border-t border-gray-200 px-6 py-6 pl-[4.5rem]">
                                            <ul className="space-y-3">
                                                {module.topics.map((topic, i) => (
                                                    <li key={i} className="flex items-center gap-3 text-gray-600">
                                                        <div className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                                                        {topic}
                                                    </li>
                                                ))}
                                            </ul>
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
