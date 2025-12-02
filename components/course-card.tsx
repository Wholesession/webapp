"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";

export interface Instructor {
    name: string;
    role: string;
    image: string;
}

export interface Course {
    title: string;
    rating: number;
    startDate: string;
    instructors: Instructor[];
    rank?: number;
}

interface CourseCardProps {
    course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
    return (
        <Link href={`/course/${course.title}`} className="flex flex-col justify-between rounded-xl bg-white p-6 ring-[1px] ring-gray-100 h-full">
            <div>
                <h3 className="text-xl font-serif font-medium text-gray-900 line-clamp-2">
                    {course.title}
                </h3>

                <div className="mt-4 flex items-center gap-2 text-sm">
                    <div className="flex items-center text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`h-3.5 w-3.5 ${i < Math.floor(course.rating) ? "fill-current" : "text-gray-300"
                                    }`}
                            />
                        ))}
                    </div>
                    <span className="font-normal text-gray-700">{course.rating}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-600">{course.startDate}</span>
                </div>
            </div>

            <div className="mt-6 flex items-end justify-between">
                <div className="flex flex-col gap-3">
                    {course.instructors.map((instructor, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <div className="relative h-14 w-14 overflow-hidden rounded-full border border-gray-100">
                                <Image
                                    src={instructor.image}
                                    alt={instructor.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <p className="text-base font-medium font-serif text-gray-900">
                                    {instructor.name}
                                </p>
                                <p className="text-xs font-normal text-gray-500 line-clamp-1">
                                    {instructor.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                {course.rank && (
                    <span className="text-4xl font-bold text-gray-200 select-none">
                        {course.rank}
                    </span>
                )}
            </div>
        </Link>
    );
}
