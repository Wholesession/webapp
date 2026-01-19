"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
      question: "What makes Wholesession different from other platforms?",
      answer:
        "Most platforms sell you pre-recorded videos you'll never finish. We run live, cohort-based courses taught by senior practitioners actively shipping at companies like ALAT, Moniepoint, Andela, and Interswitch. Small cohorts (30 max), real accountability, production-focused projects. You actually finish and build real and relevant skills."
    },
    {
        question: "Why not just use Udemy or Coursera?",
        answer:
          "Because you've tried that and didn't finish. Pre-recorded videos have 3% completion rates. We run live cohorts with weekly deadlines, peer accountability, and senior instructors giving real-time feedback. You actually finish and build real skills."
      },
    {
      question: "Who teaches these courses?",
      answer:
        "Senior engineers, designers, and product leaders with 7+ years of experience building production systems at scale. Not bootcamp grads. Not tutorial creators. People currently doing the work at top African tech companies."
    },
    {
        question: "AI can do the work, so why do I need to learn?",
        answer:
         "Yes, AI can spin up a PRD, generate a design, and build you an app. But, you need to know how to think in system to properly use AI to build great product. And, this is one of our core focus—to take you from junior/mid-level to a senior role, a place where you really understand how things work and why they work the way they do."
    },
    {
      question: "Are courses live or recorded?",
      answer:
        "Live sessions with real-time interaction and feedback. Every session is recorded for students who miss a class, but the value is in showing up live—asking questions, getting code reviews, learning with your cohort."
    },
    {
      question: "How much do courses cost?",
      answer:
        "₦200k-300k per course depending on depth and duration. Most courses run 6-10 weeks. We offer payment plans. All courses include a money-back guarantee through Week 2."
    },
    {
      question: "Do you offer certificates?",
      answer:
        "Not yet. We focus on skills and real projects you can show employers—not paper credentials. You'll build production-grade work for your portfolio that proves what you can do."
    },
    {
      question: "Can I take courses if I'm not in Nigeria?",
      answer:
        "Yes. Sessions are scheduled for African time zones (WAT), but anyone globally can join. Recordings are available if you're in a conflicting timezone."
    },
    {
      question: "What if I'm a complete beginner?",
      answer:
        "Our courses are for junior/mid-level professionals (2-7 years experience) looking to reach senior levels. If you're just starting out, we're not the right fit yet. Focus on fundamentals first, then come back."
    },
    {
      question: "How do I know if a course is right for me?",
      answer:
        "Each course page lists clear prerequisites, target audience, and learning outcomes. If you meet the prerequisites and the outcomes match your goals, you're ready. Still unsure? Email us at support@wholesession.com."
    },
    {
      question: "When do new courses launch?",
      answer:
        "We launch new cohorts quarterly. Join our waitlist for specific courses to get notified when enrollment opens and access early-bird pricing."
    },
    {
      question: "Can I teach on Wholesession?",
      answer:
        "Yes. We're looking for senior practitioners (8+ years) with production experience and a track record of mentoring. Although, we do not open applications for mentorship, rather we find the top 5% ourselves and bring them in. But, if you are here and you believe you are qualified enough to teach, you can shoot us an email at support@wholesession.com"
    }
  ];  

export function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 sm:py-32 border-t border-white/5 font-body">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-semibold tracking-tight sm:text-4xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 text-lg text-gray-700">
                        Everything you need to know about Wholesession
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white/5 overflow-hidden transition-colors hover:bg-white/[0.07] font-body"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="flex w-full items-center justify-between p-6 text-left cursor-pointer"
                            >
                                <span className="text-2xl font-semibold">{faq.question}</span>
                                <span className="ml-6">
                                    {openIndex === index ? (
                                        <Minus className="h-5 w-5" />
                                    ) : (
                                        <Plus className="h-5 w-5" />
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
                                        <div className="px-6 pb-6 text-base leading-7 text-gray-700 font-body">
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
