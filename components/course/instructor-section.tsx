"use client";

import { Course } from "@/lib/courses";
import Image from "next/image";
import { Linkedin, Github, Twitter, Award, Briefcase } from "lucide-react";

interface InstructorsProps {
    course: Course;
}

export function Instructors({ course }: InstructorsProps) {
    return (
        <section className="font-body">
            <div>
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-body text-[#0a0c1b]">
                        Learn from {course.instructors[0].name}
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-12">
                    {course.instructors.map((instructor, index) => (
                        <div key={index} className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
                            <div className="flex flex-col gap-8 items-start">
                                <div className="w-full flex flex-col items-center text-center">
                                    <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-white shadow-xl bg-gray-50 flex items-center justify-center">
                                        {instructor.image ? (
                                            <Image
                                                src={instructor.image}
                                                alt={instructor.name}
                                                fill
                                                className="object-cover"
                                            />
                                        ) : (
                                            <div className="flex items-center justify-center w-full h-full bg-[#372772] text-white text-4xl font-bold">
                                                {instructor.name.split(' ').map(n => n[0]).join('')}
                                            </div>
                                        )}
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#0a0c1b] mb-1">{instructor.name}</h3>
                                    <p className="text-gray-700 font-medium mb-4">{instructor.role}</p>

                                    <div className="flex gap-4">
                                        {instructor.linkedin && (
                                            <a href={instructor.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-600 rounded-full hover:bg-gray-200 hover:text-gray-600 transition-colors">
                                                <Linkedin className="w-5 h-5" />
                                            </a>
                                        )}
                                        {instructor.twitter && (
                                            <a href={instructor.twitter} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-600 rounded-full hover:bg-gray-200 hover:text-gray-600 transition-colors">
                                                <Twitter className="w-5 h-5" />
                                            </a>
                                        )}
                                        {instructor.github && (
                                            <a href={instructor.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-600 rounded-full hover:bg-gray-200 hover:text-gray-600 transition-colors">
                                                <Github className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className="w-full space-y-8">
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4 flex items-center gap-2">
                                            <Briefcase className="w-4 h-4 text-gray-700" />
                                            Bio
                                        </h4>
                                        <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-wrap">
                                            {instructor.bio}
                                        </p>
                                    </div>

                                    {instructor.prevCompanies && instructor.prevCompanies.length > 0 && (
                                        <div>
                                            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">
                                                Previously At
                                            </h4>
                                            <div className="flex flex-wrap gap-3">
                                                {instructor.prevCompanies.map((company, i) => (
                                                    <span key={i} className="px-3 py-1 bg-gray-100 rounded text-sm text-gray-700 font-medium">
                                                        {company}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    {instructor.achievements && instructor.achievements.length > 0 && (
                                        <div>
                                            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4 flex items-center gap-2">
                                                <Award className="w-4 h-4 text-gray-700" />
                                                Key Achievements
                                            </h4>
                                            <ul className="space-y-3">
                                                {instructor.achievements.map((achievement, i) => (
                                                    <li key={i} className="flex gap-3 text-gray-600">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                                                        {achievement}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
