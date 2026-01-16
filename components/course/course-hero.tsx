"use client";

import { Course } from "@/lib/courses";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star, Flame } from "lucide-react";
import Image from "next/image";

interface CourseHeroProps {
    course: Course;
}

export function CourseHero({ course }: CourseHeroProps) {
    const primaryInstructor = course.instructors.length > 0 ? course.instructors[0] : null;

    return (
        <section className="bg-white relative overflow-hidden border-b border-gray-100 font-body">
            <div className="container mx-auto">
                <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block pointer-events-none opacity-50">
                    <svg width="100%" height="100%" viewBox="0 0 400 400" preserveAspectRatio="none">
                        <defs>
                            <pattern id="grid-pattern" width="40" height="100%" patternUnits="userSpaceOnUse">
                                <line x1="0" y1="0" x2="0" y2="100%" stroke="#e5e7eb" strokeWidth="1" />
                            </pattern>
                            <linearGradient id="fade-mask" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="white" stopOpacity="1" />
                                <stop offset="100%" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid-pattern)" mask="url(#fade-mask)" />
                    </svg>
                </div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10 max-[1026px]:pt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Left Content */}
                        <motion.div
                            className="lg:col-span-7"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-body text-[#0a0c1b] tracking-tight mb-6 leading-[1.1] font-semibold max-w-[600px]">
                                {course.title}
                            </h1>

                            {primaryInstructor && (
                                <div className="flex flex-col md:items-start text-xl text-gray-700 mb-10 justify-between gap-1">
                                    <span className="font-body font-semibold text-[#0a0c1b] text-base block">{primaryInstructor.name}</span>
                                    <span className="text-gray-500 font-light block text-base max-w-[400px]">{primaryInstructor.role}</span>
                                    <span className="text-black block text-base bg-orange-50 px-2 py-1 rounded-[4px] font-semibold w-fit">{primaryInstructor.experience}</span>
                                </div>
                            )}

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 max-[640px]:flex-col max-[640px]:justify-between">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="bg-gray-50 border-gray-200 text-gray-900 hover:bg-gray-100 rounded-lg px-8 py-6 text-sm font-bold cursor-pointer h-auto max-[640px]:w-full"
                                    onClick={() => document.getElementById('syllabus')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    View Syllabus
                                </Button>

                                <div className="flex items-center gap-3 bg-orange-50 px-4 py-3 rounded-lg border border-orange-100 max-[640px]:w-full">
                                    <div className="p-1.5 bg-orange-100 rounded-full">
                                        <Flame className="w-5 h-5 text-orange-500" />
                                    </div>
                                    <div className="text-sm">
                                        <p className="font-body font-semibold text-gray-900">This course is in high demand.</p>
                                        <p className="text-gray-500">
                                            {Math.floor(course.cohortSize * 0.82)} professionals interested recently.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Image - Instructor Cutout Style */}
                        <div className="lg:col-span-5 relative h-[500px] lg:block">
                            <div className="absolute bottom-0 right-0 w-full h-full flex items-end justify-center">
                                {/* We use a mask for a softer bottom edge if needed, otherwise just the image */}
                                <div className="relative w-full h-[90%] grayscale hover:grayscale-0 transition-all duration-500">
                                    {primaryInstructor ? (
                                        <Image
                                            src={primaryInstructor.image}
                                            alt={primaryInstructor.name}
                                            fill
                                            className="object-cover object-top drop-shadow-2xl mask-image-b-gradient"
                                            style={{
                                                maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                                            }}
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
                                            {/* Placeholder or empty state */}
                                            <Image
                                                src="/ws-logo-black.svg" // Fallback to logo or generic image
                                                alt="Course"
                                                width={200}
                                                height={200}
                                                className="opacity-20"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
