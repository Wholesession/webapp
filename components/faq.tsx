"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
      question: "Who are Wholesession courses designed for?",
      answer:
        "Wholesession is built for ambitious software engineers, product managers, marketers, designers, and technical leaders who want to level up into senior, staff, or lead roles. If you're tired of surface-level tutorials and want to learn how real systems are built in production, you're in the right place."
    },
    {
      question: "How are the courses taught?",
      answer:
        "All courses are cohort-based and instructor-led. You learn in small groups through live sessions, hands-on projects, structured assignments, and guided discussions. This is not a video library — it's a shared learning experience with real accountability."
    },
    {
      question: "Are the classes live or recorded?",
      answer:
        "Classes are delivered live to allow for real-time interaction, questions, and deep discussions. Every session is recorded and made available to enrolled students, so you can catch up if you miss a class."
    },
    {
      question: "Who are the instructors?",
      answer:
        "Our instructors are senior practitioners actively working in top tech companies and high-growth startups. They are engineers, product leaders, marketers, and designers who build and ship real systems at scale — and teach directly from that experience."
    },
    {
      question: "How practical are the courses?",
      answer:
        "Very. Each course is centered around real-world projects, production-level workflows, and decision-making you would face on the job. You will not just learn concepts — you will apply them to realistic problems."
    },
    {
      question: "Do you offer certificates?",
      answer:
        "Not yet. Our focus is on skills, mastery, and real outcomes rather than certificates. However, students complete substantial projects they can showcase in portfolios, interviews, and real work. Certificates may be introduced in the future."
    },
    {
      question: "How much time do I need to commit?",
      answer:
        "Most courses run for 8–12 weeks, with 1–2 live sessions per week. You should expect to commit 4–6 hours weekly, including live classes, assignments, and project work."  
    },
    {
      question: "How is Wholesession different from other online courses?",
      answer:
        "Most platforms sell pre-recorded content. Wholesession focuses on live, high-signal learning with small cohorts and elite instructors. We provide highly experienced people the opportunity to teach and mentor. You learn directly from people who are currently doing the work — not from outdated slides."
    },
    {
      question: "Will this help my career?",
      answer:
        "Our goal is to help you think and operate at a higher level. Many of our instructors actively mentor, recommend, and work with top talent. While we cannot promise jobs, we design courses to materially improve how you perform in real roles."
    },
    {
      question: "How do I enroll?",
      answer:
        "Enrollment opens per cohort. Once a course is announced, you can apply or register directly through the Wholesession platform. Cohorts are intentionally limited to maintain quality."
    }
  ];  

export function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="bg-[#0a0c1b] py-24 sm:py-32 border-t border-white/5">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-serif font-medium tracking-tight text-white sm:text-4xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 text-lg text-gray-400">
                        Everything you need to know about Wholesession
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white/5 overflow-hidden transition-colors hover:bg-white/[0.07]"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="flex w-full items-center justify-between p-6 text-left cursor-pointer"
                            >
                                <span className="text-lg font-medium text-white">{faq.question}</span>
                                <span className="ml-6">
                                    {openIndex === index ? (
                                        <Minus className="h-5 w-5 text-[#ccc]" />
                                    ) : (
                                        <Plus className="h-5 w-5 text-[#ccc]" />
                                    )}
                                </span>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 text-base leading-7 text-[#ccc]">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
