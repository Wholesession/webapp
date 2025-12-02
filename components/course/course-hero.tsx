import { Button } from "@/components/ui/button";
import { Course } from "@/lib/courses";
import { Play, Calendar, Users, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CourseHeroProps {
    course: Course;
}

export function CourseHero({ course }: CourseHeroProps) {
    return (
        <section className="relative bg-[#0a0c1b] pt-34 pb-20 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="h-full w-full"
                    style={{
                        backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
                        backgroundSize: "40px 100%"
                    }}
                />
            </div>

            <div className="relative z-10 mx-auto max-w-[1150px] px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-300 mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-purple-400 mr-2 animate-pulse"></span>
                            Live Cohort-Based Course
                        </div>
                        <h1 className="font-serif text-4xl font-medium tracking-tight sm:text-5xl mb-6">
                            {course.title}
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            {course.subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <Link href={`/checkout/${course.slug}`} className="w-full block">
                                <Button size="lg" className="bg-white text-black hover:bg-gray-200 text-base px-8 h-12 cursor-pointer w-full">
                                    Enroll Now - ₦{course.price.toLocaleString()}
                                </Button>
                            </Link>
                            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 h-12 cursor-pointer">
                                <Play className="mr-2 h-4 w-4" /> Watch Trailer
                            </Button>
                        </div>

                        <div className="flex flex-wrap gap-6 text-sm text-gray-400 border-t border-white/10 pt-6">
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-purple-400" />
                                <span>Starts {course.startDate}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-purple-400" />
                                <span>{course.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="h-4 w-4 text-purple-400" />
                                <span>Limited to {course.cohortSize} students</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Content (Video/Image Placeholder) */}
                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-800 border border-white/10 shadow-2xl">
                        {/* Placeholder for Video */}
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-900/20 to-black">
                            <div className="text-center">
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm ring-1 ring-white/20 mb-4 cursor-pointer hover:scale-110 transition-transform">
                                    <Play className="h-6 w-6 text-white ml-1" />
                                </div>
                                <p className="text-sm font-medium text-gray-400">Watch Intro Video</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
