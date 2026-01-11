"use client";

import { motion } from "framer-motion";
import { LuArrowRight } from "react-icons/lu";

const steps = [
    {
        number: "01",
        title: "Reserve your\nspot",
        description:
            "Join a cohort of 30 ambitious learners. Pay once, get lifetime access to recordings, resources, and our alumni community.",
        bgColor: "bg-[#3B82F6]", 
        textColor: "text-white",
    },
    {
        number: "02",
        title: "Learn live with\nsenior practitioners",
        description:
            "8 weeks of live sessions with practitioners from ALAT, Moniepoint, and top companies. Build up senior level thinking and skills.",
        bgColor: "bg-[#22C55E]",
        textColor: "text-gray-900",
    },
    {
        number: "03",
        title: "Build & ship\nproduction systems",
        description:
            "Complete capstone projects that prove your senior-level skills. Graduate with a portfolio that makes hiring managers take notice.",
        bgColor: "bg-[#FDE047]",
        textColor: "text-gray-900",
    },
];

export function HowItWorks() {
    return (
        <section className="py-24 sm:py-32 font-body">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-body font-medium text-gray-900 max-w-3xl leading-tight">
                        FROM CURIOUS TO CONFIDENT —<br />
                        <span className="text-gray-600 font-body">YOUR PATH TO SENIOR.</span>
                    </h2>
                </motion.div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            className={`${step.bgColor} rounded-2xl p-8 min-h-[320px] flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-300`}
                        >
                            {/* Step Number */}
                            <div className={`${step.textColor} opacity-60 text-sm font-medium mb-6`}>
                                {step.number}
                            </div>

                            {/* Content */}
                            <div className="flex-1 flex flex-col">
                                {/* Title */}
                                <h3 className={`text-2xl sm:text-3xl font-body font-bold ${step.textColor} mb-6 leading-tight whitespace-pre-line`}>
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className={`${step.textColor} opacity-80 text-base leading-relaxed mt-auto font-body`}>
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="mt-12 text-center"
                >
                    <p className="text-gray-600 text-lg">
                        Ready to accelerate your career?{" "}
                        <a
                            href="/courses"
                            className="text-[var(--brand-color)] font-semibold hover:underline inline-flex items-center gap-1"
                        >
                            Browse upcoming cohorts
                            <LuArrowRight className="w-4 h-4 font-body" />
                        </a>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
