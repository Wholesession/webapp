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
    const primaryInstructor = course.instructors[0];

    return (
        <section className="bg-white relative overflow-hidden border-b border-gray-100">
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

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        className="lg:col-span-7"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0a0c1b] tracking-tight mb-6 leading-[1.1]">
                            {course.title}
                        </h1>

                        {/* <div className="flex items-center gap-2 mb-8">
                            <div className="flex text-[#F59E0B]">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                ))}
                            </div>
                            <span className="text-gray-700 font-medium text-lg ml-2">{course.rating}</span>
                            <span className="text-gray-400">({course.reviewsCount} reviews)</span>
                        </div> */}

                        <div className="flex flex-col md:items-start text-xl text-gray-700 mb-10 justify-between gap-1">
                            <span className="font-serif font-semibold text-[#0a0c1b] text-base block">{primaryInstructor.name}</span>
                            <span className="text-gray-500 font-light block text-base">{primaryInstructor.role} @ {primaryInstructor.company}</span>
                            <span className="text-black block text-base bg-orange-50 px-2 py-1 rounded-[4px] font-semibold">{primaryInstructor.experience}</span>
                        </div>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                            <Button
                                variant="outline"
                                size="lg"
                                className="bg-gray-50 border-gray-200 text-gray-900 hover:bg-gray-100 rounded-lg px-8 py-6 text-sm font-bold cursor-pointer h-auto"
                                onClick={() => document.getElementById('syllabus')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                View Syllabus
                            </Button>

                            <div className="flex items-center gap-3 bg-orange-50 px-4 py-3 rounded-lg border border-orange-100">
                                <div className="p-1.5 bg-orange-100 rounded-full">
                                    <Flame className="w-5 h-5 text-orange-500" />
                                </div>
                                <div className="text-sm">
                                    <p className="font-bold text-gray-900">This course is popular.</p>
                                    <p className="text-gray-500">20 people enrolled last week.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Image - Instructor Cutout Style */}
                    <div className="lg:col-span-5 relative h-[500px] hidden lg:block">
                        <div className="absolute bottom-0 right-0 w-full h-full flex items-end justify-center">
                            {/* We use a mask for a softer bottom edge if needed, otherwise just the image */}
                            <div className="relative w-full h-[90%] grayscale hover:grayscale-0 transition-all duration-500">
                                <Image
                                    src={primaryInstructor.image}
                                    alt={primaryInstructor.name}
                                    fill
                                    className="object-cover object-top drop-shadow-2xl mask-image-b-gradient"
                                    style={{
                                        maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
}
