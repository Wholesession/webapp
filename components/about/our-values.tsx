"use client";

import { motion } from "framer-motion";
import { User, Zap, Heart, Globe } from "lucide-react";

const values = [
    {
        icon: User,
        title: "Learners First",
        description: "Every decision we make starts with the question: 'Does this help our students succeed?'"
    },
    {
        icon: Zap,
        title: "Bias for Action",
        description: "We value practical skills over theory. We build, we ship, and we learn by doing."
    },
    {
        icon: Heart,
        title: "Community Driven",
        description: "Education is a social experience. We foster deep connections between peers and mentors."
    },
    {
        icon: Globe,
        title: "Global Standards",
        description: "We bring silicon valley standards to African education. No compromises on quality."
    }
];

export function OurValues() {
    return (
        <section className="py-24 bg-[#f8f9fa] text-[#0a0c1b]">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] mb-6">
                        Our Core Values
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        The principles that guide us as we build the future of education.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center justify-center"
                        >
                            <div className="w-12 h-12 bg-[#f8f9fa] rounded-lg flex items-center justify-center mb-6 text-[#372772]">
                                <value.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-[family-name:var(--font-playfair)] text-center">
                                {value.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-center">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
