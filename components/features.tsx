"use client";

import { motion } from "framer-motion";
import { Users, Zap, Trophy, Target } from "lucide-react";

const features = [
    {
        name: "Cohort-Based Learning",
        description:
            "Learn alongside a community of ambitious peers. Collaborate, compete, and grow together.",
        icon: Users,
    },
    {
        name: "Expert Instructors",
        description:
            "Taught by engineers from top companies like Moniepoint, Google, and Amazon.",
        icon: Trophy,
    },
    {
        name: "Real-World Projects",
        description:
            "Build production-grade applications that you can actually put on your portfolio.",
        icon: Target,
    },
    {
        name: "Career Acceleration",
        description:
            "Get direct mentorship and career advice to land your dream role in tech.",
        icon: Zap,
    },
];

export function Features() {
    return (
        <section className="bg-black py-24 sm:py-32" id="why-wholesession">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-purple-400">
                        Why Wholesession?
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Everything you need to become a world-class engineer
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-400">
                        We don't just teach syntax. We teach engineering.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="flex flex-col"
                            >
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                                    <feature.icon
                                        className="h-5 w-5 flex-none text-purple-400"
                                        aria-hidden="true"
                                    />
                                    {feature.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-400">
                                    <p className="flex-auto">{feature.description}</p>
                                </dd>
                            </motion.div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}
