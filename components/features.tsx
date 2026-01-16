"use client";

import { motion } from "framer-motion";
import { Users, Zap, Trophy, Target } from "lucide-react";

const features = [
    {
        name: "Stop learning alone",
        description:
            "Self-paced courses collect dust. Join hundreds of learners with live sessions, weekly deadlines, and real accountability.",
        icon: Users,
    },
    {
        name: "Learn from seniors who have shipped",
        description:
            "Learn from builders with 10+ years experience building systems for millions. Not theory—what actually survives production.",
        icon: Trophy,
    },
    {
        name: "Build real projects that gets you hired",
        description:
            "No more todo apps. Build production systems that makes hiring managers call you back.",
        icon: Target,
    },
    {
        name: "Get Promoted",
        description:
            "The gap between mid-level and senior is system design. Learn the architectural thinking that gets you senior roles.",
        icon: Zap,
    },
];

export function Features() {
    return (
        <section className="border-t border-white/5 py-24 sm:py-32 font-body" id="why-wholesession">
            <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="mt-2 text-3xl font-body font-bold tracking-tight text-gray-900 sm:text-5xl text-center">
                        Why wholession gets you results
                    </h2>
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
                                className="flex flex-col relative group items-center justify-center text-center"
                            >
                                <dt className="flex items-center gap-x-3 text-[1.4rem] font-body font-bold leading-7 text-gray-900 mb-3 flex-col">
                                    <feature.icon
                                        className="h-[40px] w-[40px] flex-none text-[#000] transition-colors text-[2rem] mb-4"
                                        aria-hidden="true"
                                    />
                                    {feature.name}
                                </dt>
                                <dd className="flex flex-auto flex-col text-base font-body font-medium leading-7 text-gray-700 text-center">
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
