"use client";

import { Course } from "@/lib/courses";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star, Flame, Users } from "lucide-react";
import Image from "next/image";

interface CourseHeroProps {
    course: Course;
}

import { useEffect } from "react";

export function CourseHero({ course }: CourseHeroProps) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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

                                <div className="flex items-center gap-3 bg-gray-100 px-4 py-3 rounded-lg border border-gray-200 max-[640px]:w-full">
                                    <div className="p-1.5 bg-gray-200 rounded-full">
                                        <Users className="w-5 h-5 text-[var(--brand-color)]" />
                                    </div>
                                    <div className="text-sm">
                                        <p className="font-body font-semibold text-gray-900">Limited to {course.cohortSize} students</p>
                                        <p className="text-gray-500">
                                            Small cohort for personalized feedback.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="lg:col-span-5 relative h-[500px] lg:flex items-center justify-center">
                            {primaryInstructor && primaryInstructor.image ? (
                                <div className="absolute bottom-0 right-0 w-full h-[90%] grayscale hover:grayscale-0 transition-all duration-500">
                                    <Image
                                        src={primaryInstructor.image}
                                        alt={primaryInstructor.name}
                                        fill
                                        className="object-cover object-top drop-shadow-2xl"
                                        style={{
                                            maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                                        }}
                                    />
                                </div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-[#0a0c1b] p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group w-full"
                                >
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Image src="/ws-main-white.svg" alt="logo" width={120} height={120} />
                                    </div>

                                    <div className="relative z-10">
                                        <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-xs font-bold mb-6 border border-purple-500/30">
                                            <Star className="w-3 h-3 fill-purple-300" /> TOP RATED COHORT
                                        </div>

                                        <h3 className="text-2xl font-bold text-white mb-4">What you'll master</h3>
                                        <ul className="space-y-4">
                                            {course.outcomes.slice(0, 4).map((outcome, i) => (
                                                <li key={i} className="flex gap-3 text-gray-300 text-sm">
                                                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                                                    </div>
                                                    {outcome}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
                                            <div className="flex -space-x-2">
                                                {[1, 2, 3, 4].map(i => (
                                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0a0c1b] bg-gray-800 flex items-center justify-center text-[10px] text-gray-400 font-bold">
                                                        {String.fromCharCode(64 + i)}
                                                    </div>
                                                ))}
                                                <div className="w-8 h-8 rounded-full border-2 border-[#0a0c1b] bg-purple-600 flex items-center justify-center text-[10px] text-white font-bold">
                                                    +82
                                                </div>
                                            </div>
                                            <span className="text-xs text-gray-400">Pros already joined</span>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
