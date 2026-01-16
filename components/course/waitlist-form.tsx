"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { AlertCircle, Loader2, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface WaitlistFormProps {
    courseSlug: string;
    courseTitle: string;
}

import { trackEvent, trackLead } from "@/lib/analytics";

export function WaitlistForm({ courseSlug, courseTitle }: WaitlistFormProps) {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!name.trim()) newErrors.name = "Please enter your full name";
        if (!email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Please enter a valid email address";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setIsLoading(true);

        try {
            const response = await fetch("/api/waitlist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, name, courseSlug, courseTitle }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to join waitlist");
            }

            trackLead({
                email,
                name,
                course: courseTitle,
                slug: courseSlug
            });

            toast.success("You've been added to the waitlist!");
            setIsSubmitted(true);
        } catch (error: any) {
            toast.error(error.message || "Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-100 rounded-xl p-6 text-center"
            >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-green-900 mb-1">You're on the list!</h3>
                <p className="text-sm text-green-700">
                    We'll notify you as soon as applications open for {courseTitle}.
                </p>
            </motion.div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900 font-body">Join the waitlist</h3>
                <p className="text-sm text-gray-500 font-body">
                    Be the first to know when {courseTitle} opens for enrollment.
                </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="space-y-1.5">
                    <Label htmlFor="waitlist-name" className="text-sm font-medium text-gray-700">Full Name</Label>
                    <div className="relative">
                        <Input
                            id="waitlist-name"
                            placeholder="John Doe"
                            className={`h-11 text-black transition-all ${errors.name ? 'border-red-500 bg-red-50/30 focus-visible:ring-red-200' : 'border-gray-200'}`}
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                                if (errors.name) setErrors({ ...errors, name: "" });
                            }}
                            disabled={isLoading}
                        />
                        <AnimatePresence>
                            {errors.name && (
                                <motion.div
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-1.5 mt-1.5 text-red-600"
                                >
                                    <AlertCircle className="w-3.5 h-3.5" />
                                    <span className="text-xs font-medium">{errors.name}</span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                <div className="space-y-1.5">
                    <Label htmlFor="waitlist-email" className="text-sm font-medium text-gray-700">Email Address</Label>
                    <div className="relative">
                        <Input
                            id="waitlist-email"
                            type="email"
                            placeholder="john@example.com"
                            className={`h-11 text-black transition-all ${errors.email ? 'border-red-500 bg-red-50/30 focus-visible:ring-red-200' : 'border-gray-200'}`}
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                if (errors.email) setErrors({ ...errors, email: "" });
                            }}
                            disabled={isLoading}
                        />
                        <AnimatePresence>
                            {errors.email && (
                                <motion.div
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-1.5 mt-1.5 text-red-600"
                                >
                                    <AlertCircle className="w-3.5 h-3.5" />
                                    <span className="text-xs font-medium">{errors.email}</span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
                <Button
                    type="submit"
                    className="w-full h-12 bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold rounded-lg shadow-md transition-all active:scale-[0.98] cursor-pointer"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Processing...
                        </>
                    ) : (
                        "Notify Me"
                    )}
                </Button>
            </form>
        </div>
    );
}
