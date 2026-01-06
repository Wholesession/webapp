"use client";

import { Course } from "@/lib/courses";
import { MessageSquare, FolderKanban, Clock } from "lucide-react";

interface ScheduleProps {
    course: Course;
}

export function Schedule({ course }: ScheduleProps) {
    if (!course.schedule) return null;

    return (
        <section className="bg-white">
            <div>
                <h2 className="text-3xl md:text-4xl font-serif text-[#0a0c1b] mb-8">
                    Schedule
                </h2>

                <div className="space-y-6">
                    {/* Live Sessions Card */}
                    <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                        <div className="flex items-start gap-4 mb-8">
                            <div className="bg-gray-100 p-3 rounded-xl border border-gray-200">
                                <MessageSquare className="w-6 h-6 text-[#0a0c1b]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#0a0c1b]">Live sessions</h3>
                                <p className="text-gray-600 font-medium">4 hrs / week</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {course.schedule.sessions.map((session, index) => (
                                <div key={index} className="flex flex-col sm:flex-row sm:items-center text-[1rem] gap-2 sm:gap-8">
                                    <span className="text-gray-600 w-32">{session.date}</span>
                                    <div className="flex items-center gap-2 text-[#0a0c1b]">
                                        <Clock className="w-4 h-4 text-gray-400" />
                                        <span>{session.time}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="mt-8 text-black font-semibold underline decoration-2 underline-offset-4 hover:text-gray-700">
                            {course.schedule.sessions.length} sessions in total
                        </button>
                    </div>

                    {/* Projects Card */}
                    <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm flex items-start gap-4">
                        <div className="bg-gray-100 p-3 rounded-xl border border-gray-200">
                            <FolderKanban className="w-6 h-6 text-[#0a0c1b]" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-[#0a0c1b]">Projects</h3>
                            <p className="text-gray-600 font-medium">7 hrs / week</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
