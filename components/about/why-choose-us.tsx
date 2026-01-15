"use client";

import { motion } from "framer-motion";
import { Zap, Users, Trophy, Lightbulb } from "lucide-react";

const features = [
    {
        icon: Trophy,
        title: "EXPERIENCE",
        description: "Taught by senior engineers and designers who have built and scaled products for millions of users at top companies.",
    },
    {
        icon: Zap,
        title: "EXPERTISE",
        description: "We don't just teach syntax; we teach architectural thinking, production standards, and real-world problem solving.",
    },
    {
        icon: Users,
        title: "COMMUNITY",
        description: "Join a vibrant community of ambitious builders. Connect with peers, find co-founders, and get mentorship.",
    },
    {
        icon: Lightbulb,
        title: "INNOVATION",
        description: "Our curriculum is constantly evolving with the industry. Learn the latest tools, frameworks, and best practices.",
    },
];

export function WhyChooseUs() {
    return (
        <section className="py-24 bg-white font-body">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Header */}
                    <div className="lg:w-1/3">
                        <h2 className="text-4xl lg:text-5xl font-bold text-[#0a0c1b] leading-tight mb-6">
                            WHY CHOOSE <br />
                            WHOLESESSION?
                        </h2>
                    </div>

                    {/* Grid */}
                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex flex-col items-start"
                                >
                                    <div className="mb-6 p-4 rounded-full bg-blue-50 text-[#4F70FF]">
                                        <Icon size={32} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0a0c1b] mb-3 uppercase tracking-wide">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
