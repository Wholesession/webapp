"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const instructors = [
    {
        name: "Chukwudi",
        role: "Senior Backend Engineer",
        company: "Moniepoint",
        image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=200&h=200", // Placeholder
    },
    {
        name: "Adora",
        role: "Lead Frontend Engineer",
        company: "Microsoft",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200", // Placeholder
    },
    {
        name: "Emmanuel",
        role: "DevOps Engineer",
        company: "Google",
        image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&q=80&w=200&h=200", // Placeholder
    },
];

export function Instructors() {
    return (
        <section className="bg-black py-24 sm:py-32" id="instructors">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Learn from the Best
                    </h2>
                    <p className="mt-2 text-lg leading-8 text-gray-400">
                        Our instructors don't just teach. They build systems used by millions.
                    </p>
                </div>
                <ul
                    role="list"
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
                >
                    {instructors.map((person, index) => (
                        <motion.li
                            key={person.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="flex flex-col items-center gap-y-4">
                                <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white/10">
                                    <Image
                                        className="h-full w-full object-cover"
                                        src={person.image}
                                        alt={person.name}
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-lg font-semibold leading-8 text-white">
                                        {person.name}
                                    </h3>
                                    <p className="text-base leading-7 text-purple-400">
                                        {person.role}
                                    </p>
                                    <p className="text-sm leading-6 text-gray-500">
                                        {person.company}
                                    </p>
                                </div>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
