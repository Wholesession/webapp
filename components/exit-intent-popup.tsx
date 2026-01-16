"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Download, Loader2, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { trackEvent } from "@/lib/analytics";

interface ExitIntentPopupProps {
    courseTitle?: string;
    courseSlug?: string;
}

export function ExitIntentPopup({ courseTitle, courseSlug }: ExitIntentPopupProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        // Only show if not already dismissed or submitted in this session
        const hasSeen = sessionStorage.getItem("exit-popup-seen");
        const hasSubmitted = localStorage.getItem("lead-magnet-downloaded");

        if (hasSeen || hasSubmitted) return;

        const handleMouseLeave = (e: MouseEvent) => {
            // Check if mouse left through the top (where close button/tabs are)
            if (e.clientY <= 0) {
                setIsVisible(true);
                sessionStorage.setItem("exit-popup-seen", "true");
                trackEvent("Exit Intent Triggered", { course: courseTitle });
            }
        };

        document.addEventListener("mouseleave", handleMouseLeave);
        return () => document.removeEventListener("mouseleave", handleMouseLeave);
    }, [courseTitle]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setIsLoading(true);
        try {
            // We'll reuse the waitlist API or create a specific one
            const response = await fetch("/api/waitlist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email,
                    name: "Lead Magnet User",
                    courseSlug: courseSlug || "general",
                    courseTitle: courseTitle || "General Curriculum"
                }),
            });

            if (!response.ok) throw new Error("Failed to submit");

            setIsSubmitted(true);
            localStorage.setItem("lead-magnet-downloaded", "true");
            trackEvent("Lead Magnet Submitted", { email, course: courseTitle });
            toast.success("Sending the curriculum to your inbox!");

            // Trigger actual download if slug exists
            if (courseSlug) {
                const link = document.createElement('a');
                link.href = `/syllabus/${courseSlug}.pdf`;
                link.download = `${courseSlug}-curriculum.pdf`;
                link.click();
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const closePopup = () => {
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closePopup}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Popup Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl"
                    >
                        {/* Decorative Top */}
                        <div className="h-32 bg-[#4F70FF] relative flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 opacity-20">
                                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    <pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse">
                                        <circle cx="2" cy="2" r="1" fill="white" />
                                    </pattern>
                                    <rect width="100%" height="100%" fill="url(#dots)" />
                                </svg>
                            </div>
                            <div className="bg-white/20 p-4 rounded-full backdrop-blur-md">
                                <Download className="w-10 h-10 text-white" />
                            </div>
                            <button
                                onClick={closePopup}
                                className="absolute top-4 right-4 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="p-8 text-center">
                            {!isSubmitted ? (
                                <>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        Don't leave empty-handed!
                                    </h3>
                                    <p className="text-gray-600 mb-8">
                                        {courseTitle
                                            ? `Get the full ${courseTitle} curriculum and career roadmap PDF sent to your inbox.`
                                            : "Get our comprehensive tech career roadmap and curriculum guide for free."}
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <Input
                                                type="email"
                                                placeholder="Enter your email"
                                                required
                                                className="pl-12 h-14 rounded-xl border-gray-200 focus:ring-[#4F70FF] text-black"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <Button
                                            type="submit"
                                            disabled={isLoading}
                                            className="w-full h-14 bg-[#4F70FF] hover:bg-[#3D5CFF] text-white rounded-xl font-bold text-lg shadow-lg cursor-pointer shadow-blue-200 transition-all active:scale-[0.98]"
                                        >
                                            {isLoading ? (
                                                <Loader2 className="w-6 h-6 animate-spin" />
                                            ) : (
                                                <>
                                                    Unlock Curriculum
                                                    <ArrowRight className="ml-2 w-5 h-5" />
                                                </>
                                            )}
                                        </Button>
                                    </form>
                                    <p className="mt-4 text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                                        Join 1,200+ ambitious developers
                                    </p>
                                </>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="py-4"
                                >
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Sparkles className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">You're all set!</h3>
                                    <p className="text-gray-600 mb-6">
                                        Check your inbox (and spam folder) for the download link. Your journey to senior engineering starts now.
                                    </p>
                                    <Button
                                        onClick={closePopup}
                                        className="w-full h-12 bg-gray-900 text-white rounded-xl font-bold"
                                    >
                                        Back to Browsing
                                    </Button>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
