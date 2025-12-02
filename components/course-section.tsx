"use client";

import Link from "next/link";
import { Course, CourseCard } from "@/components/course-card";
import { ChevronRight } from "lucide-react";

interface CourseSectionProps {
    title: string;
    courses: Course[];
}

export function CourseSection({ title, courses }: CourseSectionProps) {
    return (
        <section className="py-12 bg-gray-50">
            <div className="mx-auto max-w-[1150px] px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-serif font-medium text-[#0a0c1b]">
                        {title}
                    </h2>
                    <Link
                        href="#"
                        className="group flex items-center text-sm font-semibold text-gray-900 hover:text-blue-600"
                    >
                        See all
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {courses.map((course, index) => (
                        <CourseCard key={index} course={course} />
                    ))}
                </div>
            </div>
        </section>
    );
}
