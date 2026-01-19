"use client";

import { Course } from "@/lib/courses";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formatUSD } from "@/lib/utils";

interface CourseCardProps {
    course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
    const isComingSoon = course.status === "Coming Soon";
    const statusLabel = isComingSoon ? "Coming Soon" : `Starts ${course.startDate}`;
    return (
        <Link
            href={`/course/${course.slug}`}
            className={`group relative flex flex-col justify-between rounded-2xl bg-white p-8 ring-1 ring-gray-200 transition-all hover:shadow-lg hover:ring-purple-100 h-full overflow-hidden font-body ${isComingSoon ? 'opacity-90 grayscale-[0.5] hover:grayscale-0' : ''}`}
        >
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

            <CourseCardContent course={course} statusLabel={statusLabel} isComingSoon={isComingSoon} />
        </Link>
    );
}

function CourseCardContent({ course, statusLabel, isComingSoon }: { course: Course, statusLabel: string, isComingSoon: boolean }) {
    return (
        <>
            <div className="relative z-10">
                <h3 className="text-2xl text-[#0a0c1b] leading-tight mb-3 font-semibold">
                    {course.title}
                </h3>

                <div className="flex items-start gap-2 text-sm text-gray-500 font-medium mb-8 flex-col ">
                    {!isComingSoon ? (
                        <div className="flex items-center gap-2">
                            <span className="text-gray-900 font-bold block">₦{Number(course.price).toLocaleString()}</span>
                            <span className="text-gray-500 text-xs">({formatUSD(course.price)})</span>
                            {course.originalPrice && Number(course.originalPrice) > Number(course.price) && (
                                <span className="text-gray-400 line-through text-xs italic">₦{Number(course.originalPrice).toLocaleString()}</span>
                            )}
                            <span className="text-gray-400 text-xs">/ {course.duration}</span>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                            <span className="text-gray-900 font-bold block">{course.duration} Course</span>
                        </div>
                    )}
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className={`font-semibold ${isComingSoon ? 'text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full text-xs w-fit' : 'text-gray-700'}`}>
                            {isComingSoon ? `Coming Soon • Starts ${course.startDate}` : statusLabel}
                        </span>
                        {!isComingSoon && course.originalPrice && Number(course.originalPrice) > Number(course.price) && (
                            <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                                Save {Math.round(((Number(course.originalPrice) - Number(course.price)) / Number(course.originalPrice)) * 100)}%
                            </span>
                        )}
                    </div>
                </div>
            </div>

            <div className="relative z-10 mt-auto border-t border-gray-100 pt-6">
                {course.instructors.length > 0 ? (
                    <div className="flex flex-col gap-1">
                        {course.instructors.slice(0, 1).map((instructor, index) => (
                            <div key={index}>
                                <p className="text-base font-medium font-body text-[#0a0c1b]">
                                    {instructor.name}
                                </p>
                                <p className="text-sm font-normal text-gray-500">
                                    {instructor.role}
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col gap-1">
                        <p className="text-sm font-normal text-gray-400 italic">
                            Instructors are being finalized
                        </p>
                    </div>
                )}
            </div>
        </>
    );
}
