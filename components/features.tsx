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
            "Taught by engineers and professionals from top companies like Moniepoint, WEMA, and Amazon.",
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
        <section className="bg-[#0a0c1b] border-t border-white/5 py-24 sm:py-32" id="why-wholesession">
            <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="mt-2 text-3xl font-serif font-medium tracking-tight text-white sm:text-5xl">
                        Everything you need to become a world-class
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-400 max-w-2xl mx-auto">
                        We don't just teach syntax. We teach engineering. Our curriculum is designed to bridge the gap between self-taught and senior level execution.
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
                                className="flex flex-col relative group items-center justify-center"
                            >
                                <dt className="flex items-center gap-x-3 text-[1.4rem] font-serif font-medium leading-7 text-white mb-3 flex-col">
                                    <feature.icon
                                        className="h-[40px] w-[40px] flex-none text-[#fff] transition-colors text-[2rem] mb-4"
                                        aria-hidden="true"
                                    />
                                    {feature.name}
                                </dt>
                                <dd className="flex flex-auto flex-col text-base leading-7 text-gray-400 text-center">
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
