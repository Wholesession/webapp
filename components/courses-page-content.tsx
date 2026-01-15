"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CourseCard } from "@/components/course-card";
import { Course } from "@/lib/courses";
import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";

const CATEGORIES = ["All", "Engineering", "Product", "Design", "AI/ML", "Business", "Marketing"];

export default function CoursesPage({ courses }: { courses: Course[] }) {
    const searchParams = useSearchParams();
    const initialCategory = searchParams.get("category");

    // Normalize category from URL to match our specific options (case-insensitive check could be good, but simple is fine for now)
    const validCategory = initialCategory && CATEGORIES.includes(initialCategory) ? initialCategory : "All";

    const [selectedCategory, setSelectedCategory] = useState(validCategory);

    // Update state if URL changes (e.g. back button)
    useEffect(() => {
        if (initialCategory && CATEGORIES.includes(initialCategory)) {
            setSelectedCategory(initialCategory);
        } else {
            setSelectedCategory("All");
        }
    }, [initialCategory]);

    const filteredCourses = useMemo(() => {
        if (selectedCategory === "All") return courses;
        if (selectedCategory === "AI") return courses.filter(c => c.category === "AI" || c.title.includes("AI"));
        return courses.filter(c => c.category === selectedCategory);
    }, [courses, selectedCategory]);

    return (
        <main className="min-h-screen bg-white font-body selection:bg-purple-100">
            <Navbar theme="light" />

            {/* Header Section */}
            <div className="pt-32 pb-16 relative overflow-hidden bg-gray-50">
                <div className="absolute inset-0 opacity-30">
                    <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 C 20 0 50 0 100 100 Z" fill="url(#header-gradient)" />
                        <defs>
                            <linearGradient id="header-gradient" x1="0" x2="0" y1="0" y2="1">
                                <stop offset="0%" stopColor="#f3e8ff" />
                                <stop offset="100%" stopColor="transparent" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center font-body">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#0a0c1b] mb-6"
                    >
                        Browse our catalog
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600 max-w-2xl mx-auto font-body"
                    >
                        Level up to senior roles learning and building with our hands-on courses on engineering, product, and business.
                    </motion.p>
                </div>
            </div>

            {/* Filter & Grid Section */}
            <div className="container mx-auto px-4 py-16">
                {/* Category Filter */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === cat
                                ? "bg-[#0a0c1b] text-white shadow-lg scale-105"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredCourses.map((course) => (
                            <motion.div
                                key={course.slug}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="h-full transform hover:-translate-y-1 transition-transform duration-300">
                                    <CourseCard course={course} />
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {filteredCourses.length === 0 && (
                    <div className="text-center py-20">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">🔍</span>
                        </div>
                        <h3 className="text-xl font-medium text-gray-900">No courses found</h3>
                        <p className="text-gray-500 mt-2">We don't have {selectedCategory} courses open just yet. Check back soon!</p>
                    </div>
                )}
            </div>

            <Footer />
        </main>
    );
}
