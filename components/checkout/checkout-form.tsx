"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Course } from "@/lib/courses";
import { Lock } from "lucide-react";
import { useState } from "react";

interface CheckoutFormProps {
    course: Course;
}

export function CheckoutForm({ course }: CheckoutFormProps) {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // TODO: Implement Paystack integration here
        setTimeout(() => {
            setIsLoading(false);
            alert("Payment integration coming soon!");
        }, 1500);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8 py-6 lg:py-10 px-4 lg:px-0 max-w-lg">
            <div>
                <h1 className="text-2xl font-serif font-medium text-gray-900 mb-2">
                    Complete your enrollment
                </h1>
                <p className="text-sm text-gray-500">
                    Enter your details to secure your spot in the cohort.
                </p>
            </div>

            <div className="space-y-6">
                <div className="grid gap-2">
                    <Label htmlFor="name" className="text-sm font-medium text-gray-900">Full Name</Label>
                    <Input id="name" placeholder="e.g. Michael Dell" required className="text-gray-900"/>
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-900">Email Address</Label>
                    <Input id="email" type="email" placeholder="name@example.com" required className="text-gray-900"/>
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-900">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+234..." required className="text-gray-900"/>
                </div>
            </div>

            <Button
                type="submit"
                size="lg"
                className="w-full h-14 text-lg bg-black hover:bg-gray-800 text-white cursor-pointer"
                disabled={isLoading}
            >
                {isLoading ? (
                    "Processing..."
                ) : (
                    <span className="flex items-center gap-2">
                        <Lock className="h-4 w-4" /> Pay ₦{course.price.toLocaleString()}
                    </span>
                )}
            </Button>

            <p className="text-xs text-center text-gray-400">
                By clicking "Pay", you agree to our Terms of Service and Privacy Policy.
            </p>
        </form>
    );
}
