"use client";

import { Course } from "@/lib/courses";
import { Check, BookOpen, Terminal, Users, Clock } from "lucide-react";

interface LogisticsProps {
    course: Course;
}

export function Logistics({ course }: LogisticsProps) {
    if (!course.logistics) return null;

    return (
        <section className="text-white font-body">

            <div className="relative z-10">

                {/* Audience Section */}
                <div>
                    <h3 className="text-4xl font-body text-black mb-6">Who is this for?</h3>
                    <div className="space-y-3">
                        {course.targetAudience?.map((audienceItem, i) => (
                            <div key={i} className="flex items-center gap-3 py-[2.4rem] px-[2rem] rounded-[14px] border border-black/10">
                                <Users className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                                <span className="text-[1.1rem] leading-relaxed text-black prose prose-lg">{audienceItem}</span>
                            </div>
                        ))}
                    </div>

                    {course.prerequisites && (
                        <div className="mt-12">
                            <h4 className="text-4xl font-body font-normal text-black mb-6">Prerequisites</h4>
                            <ul className="space-y-2">
                                {course.prerequisites.map((req, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-400 text-[1rem]">
                                        <div className="w-1.5 h-1.5 bg-gray-700 rounded-full mt-1.5 flex-shrink-0" />
                                        <span className="text-[1rem] leading-relaxed text-black prose prose-lg">{req}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Logistics Section */}
                <div className="space-y-6">
                    <div>
                        <h3 className="text-4xl font-body font-normal text-black mb-6 mt-12">How you'll learn</h3>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="bg-white/10 p-3 rounded-lg h-fit">
                                    <BookOpen className="w-6 h-6 text-black" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-black text-[1rem] mb-1 font-body">Teaching Style</h4>
                                    <p className="text-[1rem] text-gray-700 leading-relaxed font-body">{course.logistics.teachingStyle}</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="bg-white/10 p-3 rounded-lg h-fit">
                                    <Clock className="w-6 h-6 text-black" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-black text-[1rem] mb-1 font-body">Commitment</h4>
                                    <p className="text-[1rem] text-gray-700 leading-relaxed font-body">
                                        {course.logistics.homework ? "Includes weekly assignments" : "No mandatory homework"}
                                        {course.logistics.capstone && " + Capstone Project"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {course.tools && course.tools.length > 0 && (
                        <div className="pt-6 border-t border-white/10 mt-12">
                            <div className="flex items-center gap-2 mb-3">
                                <Terminal className="w-4 h-4 text-black" />
                                <h4 className="text-4xl font-body font-normal text-black">Tools & Stack</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {course.tools.map((tool, i) => (
                                    <span key={i} className="px-2 py-2 rounded-md text-xs text-black border border-white/5 text-[1rem] bg-gray-100 font-body">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
}
