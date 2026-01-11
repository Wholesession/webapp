"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
    { name: "Product", color: "from-orange-500 to-red-500" },
    { name: "Engineering", color: "from-cyan-500 to-blue-500" },
    { name: "Design", color: "from-indigo-500 to-purple-500" },
];

export function FocusAreas() {
    return (
        <section className="font-bold py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl mb-12">
                    Unlock your full potential
                </h2>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {categories.map((category, index) => (
                        <Link
                            key={category.name}
                            href={`/category/${category.name.toLowerCase()}`}
                            className="group relative overflow-hidden rounded-2xl bg-white/5 aspect-square ring-1 ring-white/10 hover:ring-white/20 transition-all border border-gray-200"
                        >
                            <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500">
                                <div
                                    className="h-full w-full"
                                    style={{
                                        backgroundImage: "repeating-linear-gradient(75deg, transparent, transparent 10px, black 10px, black 11px)"
                                    }}
                                />
                            </div>

                            <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                                <span className="text-2xl sm:text-3xl font-bold text-black group-hover:scale-105 transition-transform duration-300">
                                    {category.name}
                                </span>
                            </div>

                            <div
                                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} opacity-80 group-hover:h-2 transition-all duration-300`}
                            />
                            <div
                                className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${category.color} opacity-0 blur-2xl group-hover:opacity-20 transition-opacity duration-500`}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
