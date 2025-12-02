"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Server, Layout, Cloud } from "lucide-react";

const courses = [
    {
        title: "Backend Engineering",
        description: "Master NestJS and scalable systems with a Moniepoint Engineer.",
        icon: Server,
        level: "Intermediate",
        duration: "12 Weeks",
        color: "from-purple-500 to-indigo-500",
    },
    {
        title: "Frontend Engineering",
        description: "Build modern, responsive interfaces with React and Next.js.",
        icon: Layout,
        level: "Beginner to Pro",
        duration: "10 Weeks",
        color: "from-blue-500 to-cyan-500",
    },
    {
        title: "DevOps & Cloud",
        description: "Learn CI/CD, Docker, Kubernetes, and AWS infrastructure.",
        icon: Cloud,
        level: "Advanced",
        duration: "12 Weeks",
        color: "from-orange-500 to-red-500",
    },
];

export function Courses() {
    return (
        <section className="bg-zinc-950 py-24 sm:py-32" id="courses">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Upcoming Cohorts
                    </h2>
                    <p className="mt-2 text-lg leading-8 text-gray-400">
                        Join our next batch of elite engineers.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {courses.map((course, index) => (
                        <motion.div
                            key={course.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="flex flex-col justify-between rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 hover:bg-white/10 transition-colors"
                        >
                            <div>
                                <div
                                    className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${course.color}`}
                                >
                                    <course.icon className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="mt-6 text-xl font-semibold leading-8 text-white">
                                    {course.title}
                                </h3>
                                <p className="mt-2 text-base leading-7 text-gray-400">
                                    {course.description}
                                </p>
                                <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                                    <span>{course.level}</span>
                                    <span>•</span>
                                    <span>{course.duration}</span>
                                </div>
                            </div>
                            <div className="mt-8">
                                <Button className="w-full bg-white/10 hover:bg-white/20 text-white">
                                    View Details
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
