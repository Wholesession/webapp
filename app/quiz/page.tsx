"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronRight,
    ArrowLeft,
    Sparkles,
    Code,
    Briefcase,
    Terminal,
    Cpu,
    Target,
    CheckCircle2,
    Loader2,
    Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { toast } from "sonner";
import { trackEvent } from "@/lib/analytics";
import Link from "next/link";

type Question = {
    id: string;
    text: string;
    options: {
        label: string;
        value: string;
        icon: any;
        description: string;
    }[];
};

const QUESTIONS: Question[] = [
    {
        id: "role",
        text: "What is your current role?",
        options: [
            { label: "Junior Developer", value: "junior", icon: Terminal, description: "0-2 years of experience" },
            { label: "Mid-level Developer", value: "mid", icon: Code, description: "3-5 years of experience" },
            { label: "Senior Developer", value: "senior", icon: Cpu, description: "5+ years of experience" },
            { label: "Product/Lead", value: "lead", icon: Briefcase, description: "Managing teams or products" },
        ]
    },
    {
        id: "goal",
        text: "What is your primary career goal right now?",
        options: [
            { label: "Master Backend Architecture", value: "backend", icon: Code, description: "Build scalable, production-grade systems" },
            { label: "Lead Teams & Products", value: "product", icon: Briefcase, description: "Bridge the gap between business and engineering" },
            { label: "Master AI Engineering", value: "ai", icon: Sparkles, description: "Integrate LLMs and AI into production" },
            { label: "Scale to Engineering Lead", value: "lead", icon: Target, description: "Move from individual contributor to leadership" },
        ]
    }
];

export default function PlacementQuiz() {
    const [step, setStep] = useState(0); // 0 and 1 are questions, 2 is email, 3 is result
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleAnswer = (questionId: string, value: string) => {
        setAnswers(prev => ({ ...prev, [questionId]: value }));
        setStep(prev => prev + 1);
    };

    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Track lead
            await fetch("/api/waitlist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email,
                    name: "Quiz Participant",
                    courseSlug: "quiz-lead",
                    courseTitle: "Placement Quiz"
                }),
            });

            trackEvent("Quiz Completed", { email, ...answers });
            setStep(3);
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const getRecommendation = () => {
        if (answers.goal === "product" || answers.role === "lead") {
            return {
                title: "Technical Product Management",
                slug: "product-management",
                description: "You're ready to bridge the gap between engineering and business. This cohort will help you master PRDs, agile strategy, and leadership.",
                match: 96
            };
        }
        if (answers.goal === "ai") {
            return {
                title: "AI Engineering & LLMs",
                slug: "ai-engineering",
                description: "The next generation of senior engineers will be AI-native. Master the new stack and build deterministic AI systems.",
                match: 94
            };
        }
        return {
            title: "Backend Engineering",
            slug: "backend-engineering",
            description: "Based on your focus on scalability and systems, our flagship Backend cohort is the perfect next step for your growth.",
            match: 98
        };
    };

    const recommendation = getRecommendation();

    return (
        <main className="min-h-screen bg-white font-body selection:bg-blue-100">
            <Navbar theme="light" />

            <div className="pt-32 pb-20 container mx-auto px-4 max-w-4xl min-h-[600px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                    {step < 2 && (
                        <motion.div
                            key={`step-${step}`}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-8"
                        >
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-[#4F70FF] font-bold text-sm uppercase tracking-widest">
                                    <Sparkles className="w-4 h-4" />
                                    Step {step + 1} of 2
                                </div>
                                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                                    {QUESTIONS[step].text}
                                </h1>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {QUESTIONS[step].options.map((option) => (
                                    <button
                                        key={option.value}
                                        onClick={() => handleAnswer(QUESTIONS[step].id, option.value)}
                                        className="group p-6 text-left bg-white border border-gray-100 rounded-2xl hover:border-[#4F70FF] hover:bg-blue-50/30 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer relative overflow-hidden"
                                    >
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-blue-100 group-hover:text-[#4F70FF] transition-colors">
                                                <option.icon className="w-6 h-6" />
                                            </div>
                                            <div className="font-bold text-xl text-gray-900">{option.label}</div>
                                        </div>
                                        <p className="text-gray-500 text-sm leading-relaxed">{option.description}</p>
                                    </button>
                                ))}
                            </div>

                            {step > 0 && (
                                <button
                                    onClick={() => setStep(step - 1)}
                                    className="flex items-center gap-2 text-gray-400 hover:text-gray-600 font-medium transition-colors"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    Back
                                </button>
                            )}
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step-email"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white rounded-[2.5rem] p-8 md:p-16 border border-gray-100 shadow-2xl shadow-blue-100/50 text-center space-y-8"
                        >
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto text-[#4F70FF]">
                                <Loader2 className="w-8 h-8 animate-spin" />
                            </div>
                            <div className="space-y-3">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Analyzing your profile...</h2>
                                <p className="text-gray-600 text-lg">We've calculated your matching score. Where should we send your custom career roadmap?</p>
                            </div>

                            <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto space-y-4">
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <Input
                                        type="email"
                                        placeholder="Enter your work email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="h-14 pl-12 rounded-xl border-gray-200 focus:ring-[#4F70FF]"
                                    />
                                </div>
                                <Button
                                    className="w-full h-14 bg-[#4F70FF] hover:bg-[#3D5CFF] text-white rounded-xl font-bold text-lg cursor-pointer"
                                    disabled={isLoading}
                                >
                                    {isLoading ? "Generating Result..." : "See My Recommendation"}
                                </Button>
                            </form>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="step-result"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-10"
                        >
                            <div className="bg-[#4F70FF] rounded-[2.5rem] p-8 md:p-16 text-white relative">
                                {/* Decoration */}
                                <div className="absolute top-0 right-0 w-96 h-96 bg-[#4F70FF]/10 rounded-full blur-3xl -mr-48 -mt-48" />

                                <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                                    <div className="flex-1 space-y-6">
                                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4F70FF]/20 border border-[#4F70FF]/30 text-[#4F70FF] font-bold text-sm tracking-widest uppercase border-white text-white">
                                            <CheckCircle2 className="w-4 h-4" />
                                            Optimal Match: {recommendation.match}%
                                        </div>
                                        <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                                            {recommendation.title}
                                        </h2>
                                        <p className="text-gray-300 text-lg leading-relaxed md:max-w-lg">
                                            {recommendation.description}
                                        </p>
                                        <div className="pt-4 flex flex-wrap gap-4">
                                            <Link href={`/course/${recommendation.slug}`}>
                                                <Button size="lg" className="h-14 bg-[#4F70FF] hover:bg-[#3D5CFF] text-white px-8 rounded-xl font-bold text-lg group cursor-pointer">
                                                    Explore Cohort
                                                    <ChevronRight className="ml-1 w-5 h-5 transition-transform group-hover:translate-x-1" />
                                                </Button>
                                            </Link>
                                            <Link href="/courses">
                                                <Button variant="outline" size="lg" className="h-14 border-white/20 text-white hover:bg-white/10 rounded-xl px-8 cursor-pointer">
                                                    View All Courses
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="flex-shrink-0 relative">
                                        <div className="w-14 h-14 md:w-64 md:h-64 rounded-full border-8 border-white/5 flex items-center justify-center relative">
                                            {/* Circular Progress Simulated */}
                                            <svg className="absolute inset-0 w-full h-full -rotate-90">
                                                <circle
                                                    cx="50%" cy="50%" r="48%"
                                                    stroke="currentColor"
                                                    strokeWidth="8"
                                                    fill="transparent"
                                                    className="text-[#4F70FF]"
                                                    strokeDasharray="301.59"
                                                    strokeDashoffset={301.59 * (1 - recommendation.match / 100)}
                                                />
                                            </svg>
                                            <div className="text-center">
                                                <span className="text-2xl md:text-4xl font-black block">{recommendation.match}%</span>
                                                <span className="text-xs text-blue-400 uppercase font-bold tracking-widest">Match Score</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    { title: "Personal Mentor", desc: "Weekly 1-on-1 sessions to review your core architecture." },
                                    { title: "Production Lab", desc: "Build a real fintech system handling 1,000+ RPS." },
                                    { title: "Alumni Network", desc: "Direct access to engineers at Moniepoint, Google & Meta." }
                                ].map((feature, i) => (
                                    <div key={i} className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                        <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 text-[#4F70FF]">
                                            <CheckCircle2 className="w-5 h-5" />
                                        </div>
                                        <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                                        <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <Footer />
        </main>
    );
}
