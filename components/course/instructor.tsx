"use client";

import { Course } from "@/lib/courses";
import Image from "next/image";
import { Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

interface InstructorProps {
    instructors: Course["instructors"];
}

export function Instructor({ instructors }: InstructorProps) {
    return (
        <section className="py-24 bg-gray-50">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                {instructors.map((instructor, index) => (
                    <div key={index} className={`flex flex-col md:flex-row gap-12 items-center ${index > 0 ? "mt-24 pt-24 border-t border-gray-200" : ""}`}>
                        <div className="relative shrink-0">
                            <div className="h-64 w-64 rounded-2xl overflow-hidden ring-1 ring-gray-200 shadow-xl">
                                <Image
                                    src={instructor.image}
                                    alt={instructor.name}
                                    fill
                                    unoptimized
                                    priority
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-xl bg-white p-4 shadow-lg flex items-center justify-center">
                                {/* Placeholder for Company Logo */}
                                <span className="text-xs font-bold text-center text-gray-400">
                                    {instructor.company}
                                </span>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-sm font-bold tracking-wide text-purple-600 uppercase mb-2">
                                Meet your Instructor
                            </h2>
                            <h3 className="text-3xl font-serif font-medium text-gray-900 mb-6">
                                {instructor.name}
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                {instructor.bio}
                            </p>

                            <div className="flex gap-4">
                                {instructor.linkedin && (
                                    <Link href={instructor.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                                        <Linkedin className="h-6 w-6" />
                                    </Link>
                                )}
                                {instructor.twitter && (
                                    <Link href={instructor.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                                        <Twitter className="h-6 w-6" />
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
