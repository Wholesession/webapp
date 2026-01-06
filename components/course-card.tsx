"use client";

import { Course } from "@/lib/courses";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CourseCardProps {
    course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
    return (
        <Link href={`/course/${course.slug}`} className="group relative flex flex-col justify-between rounded-2xl bg-white p-8 ring-1 ring-gray-200 transition-all hover:shadow-lg hover:ring-purple-100 h-full overflow-hidden">

            {/* Decorative Side Pattern */}
            <div className="absolute right-0 bottom-0 top-0 w-32 opacity-40 group-hover:opacity-60 transition-opacity pointer-events-none">
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 100 200"
                    preserveAspectRatio="none"
                    className="h-full w-full mask-image-gradient"
                >
                    {/* Generating vertical lines to mimic the 'audio wave' or 'arch' feel */}
                    {Array.from({ length: 20 }).map((_, i) => (
                        <rect
                            key={i}
                            x={100 - (i * 5)}
                            y={20 + Math.sin(i * 0.5) * 50}
                            width="2"
                            height="160"
                            className="fill-gray-200"
                        />
                    ))}
                    <defs>
                        <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="white" stopOpacity="0" />
                            <stop offset="50%" stopColor="black" stopOpacity="1" />
                            <stop offset="100%" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                        <mask id="mask-lines">
                            <rect x="0" y="0" width="100" height="200" fill="url(#fade)" />
                        </mask>
                    </defs>
                </svg>
                {/* Simplified pattern implementation for clarity/performance - using simple repetitive gradient lines could also work */}
                <div className="absolute inset-0 bg-gradient-to-l from-gray-50/50 to-transparent"></div>
            </div>


            <div className="relative z-10">
                <h3 className="text-2xl font-serif text-[#0a0c1b] leading-tight mb-3">
                    {course.title}
                </h3>

                <div className="flex items-center gap-2 text-sm text-gray-500 font-medium mb-8">
                    {/* Replaced stars with generic 'badge' style or text as requested */}
                    {/* <span className="text-[#d97706] bg-[#fffbeb] px-2 py-0.5 rounded text-xs font-semibold">
                        4.9 ★
                    </span> */}
                    {/* <span>•</span> */}
                    <span className="text-gray-700">Starts {course.startDate || "Soon"}</span>
                </div>
            </div>

            <div className="relative z-10 mt-auto border-t border-gray-100 pt-6">
                <div className="flex flex-col gap-1">
                    {course.instructors.slice(0, 1).map((instructor, index) => (
                        <div key={index}>
                            <p className="text-base font-medium font-serif text-[#0a0c1b]">
                                {instructor.name}
                            </p>
                            <p className="text-sm font-normal text-gray-500 line-clamp-1">
                                {instructor.role}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Link>
    );
}
