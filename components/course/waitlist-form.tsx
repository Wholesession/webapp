"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2, Mail } from "lucide-react";

interface WaitlistFormProps {
    courseSlug: string;
    courseTitle: string;
}

export function WaitlistForm({ courseSlug, courseTitle }: WaitlistFormProps) {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
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
            <div className="bg-green-50 border border-green-100 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-green-900 mb-1">You're on the list!</h3>
                <p className="text-sm text-green-700">
                    We'll notify you as soon as applications open for {courseTitle}.
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">Join the waitlist</h3>
                <p className="text-sm text-gray-500">
                    Be the first to know when {courseTitle} opens for enrollment.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="waitlist-name">Full Name</Label>
                    <Input
                        id="waitlist-name"
                        placeholder="John Doe"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={isLoading}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="waitlist-email">Email Address</Label>
                    <Input
                        id="waitlist-email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isLoading}
                    />
                </div>
                <Button
                    type="submit"
                    className="w-full bg-[#372772] hover:bg-[#2d205d] text-white"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Joining...
                        </>
                    ) : (
                        "Notify Me"
                    )}
                </Button>
            </form>
        </div>
    );
}
