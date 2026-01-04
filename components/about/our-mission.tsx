"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function OurMission() {
    return (
        <section className="py-24 bg-white text-black overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] mb-6 text-[#0a0c1b]">
                            Our Mission
                        </h2>
                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                            <p>
                                We believe that the best way to learn is from those who are already doing it.
                                Traditional education is often disconnected from the fast-paced reality of the
                                workforce.
                            </p>
                            <p>
                                At Wholesession, we bridge this gap by connecting ambitious learners with
                                industry giants. Our mission is to unlock the potential of African talent
                                by providing direct access to world-class mentorship and practical,
                                cohort-based learning.
                            </p>
                            <p className="font-semibold text-[#8b5cf6]">
                                We aren't just teaching skills; we are building careers.
                            </p>
                        </div>
                    </motion.div>

                    {/* Decorative Image/Graphic side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative h-[500px] w-full bg-gray-100 rounded-2xl overflow-hidden shadow-2xl"
                    >
                        {/* Abstract representation of connection/growth */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0c1b] to-[#1e1e2e]">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500 rounded-full opacity-20 blur-[80px]" />
                            <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-[60px]" />
                        </div>
                        {/* You can replace this with a real image later */}
                        <div className="absolute inset-0 flex items-center justify-center p-8">
                            <div className="text-white/80 text-center font-[family-name:var(--font-playfair)] text-3xl italic">
                                "Bridging the gap between potential and mastery."
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
