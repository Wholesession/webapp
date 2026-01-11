"use client"
import { Course } from "@/lib/courses"

interface IncludedProps {
    course: Course
}

export function Included({ course }: IncludedProps) {
    return (
        <section className="font-body">
            <div>
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-body text-[#0a0c1b] mb-6">
                        What is included?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {course.included.map((item, index) => (
                            <div key={index} className="flex items-center gap-3 text-[1rem]">
                                <span className="text-[#0a0c1b] text-[1.2rem]">✔️</span>
                                <span className="text-gray-700 prose prose-lg font-body">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}