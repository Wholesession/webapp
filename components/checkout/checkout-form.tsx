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

import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

interface CheckoutFormProps {
    course: Course;
}

type PaymentPlan = "full" | "installment";

export function CheckoutForm({ course }: CheckoutFormProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [plan, setPlan] = useState<PaymentPlan>("full");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const amountToPay = plan === "full" ? course.price : Math.floor(course.price / 2);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        const toastId = toast.loading("Initializing payment...");

        try {
            const response = await fetch("/api/payment/initialize", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    courseSlug: course.slug,
                    courseTitle: course.title,
                    plan: plan
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Payment initialization failed");
            }

            if (data.authorizationUrl) {
                toast.success("Redirecting to Paystack...", { id: toastId });
                window.location.href = data.authorizationUrl;
            } else {
                throw new Error("No payment URL returned");
            }

        } catch (error: any) {
            console.error("Checkout Error:", error);
            toast.error(error.message || "Something went wrong. Please try again.", { id: toastId });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8 py-6 lg:py-10 px-4 lg:px-0 max-w-lg font-body">
            <div>
                <h1 className="text-2xl font-medium text-gray-900 mb-2">
                    Complete your enrollment
                </h1>
                <p className="text-sm text-gray-500">
                    Secure your spot in the <strong>{course.title}</strong> cohort.
                </p>
            </div>

            {/* Payment Plan Selection */}
            <div className="space-y-4">
                <Label className="text-sm font-medium text-gray-900">Payment Option</Label>
                <div className="grid grid-cols-1 gap-4">
                    {/* Full Payment Option */}
                    <div
                        className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all ${plan === "full" ? "border-[#372772]" : "border-gray-200 hover:border-[#372772]"}`}
                        onClick={() => setPlan("full")}
                    >
                        <div className="flex items-center justify-between mb-1">
                            <span className="font-semibold text-gray-900">One-time Payment</span>
                            {plan === "full" && <CheckCircle2 className="w-5 h-5 text-[#372772]" />}
                        </div>
                        <div className="text-2xl font-bold text-gray-900">₦{course.price.toLocaleString()}</div>
                        <p className="text-xs text-gray-500 mt-1">Best value. No future payments.</p>
                    </div>

                    {/* Installment Option */}
                    <div
                        className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all ${plan === "installment" ? "border-[#372772]" : "border-gray-200 hover:border-[#372772]"}`}
                        onClick={() => setPlan("installment")}
                    >
                        <div className="flex items-center justify-between mb-1">
                            <span className="font-semibold text-gray-900">Installment Plan (50%)</span>
                            {plan === "installment" && <CheckCircle2 className="w-5 h-5 text-[#372772]" />}
                        </div>
                        <div className="flex items-baseline gap-2">
                            <div className="text-2xl font-bold text-gray-900">₦{Math.floor(course.price / 2).toLocaleString()}</div>
                            <span className="text-sm text-gray-500">today</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Pay the balance halfway through the course.</p>
                        <div className="absolute -top-3 left-4 bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide border border-green-200">
                            Flexible
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <div className="grid gap-2">
                    <Label htmlFor="name" className="text-sm font-semibold text-gray-900">Full Name</Label>
                    <Input
                        id="name"
                        placeholder="e.g. Michael Emmanuel"
                        required
                        className="text-gray-900"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="email" className="text-sm font-semibold text-gray-900">Email Address</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        required
                        className="text-gray-900"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="phone" className="text-sm font-semibold text-gray-900">Phone Number</Label>
                    <Input
                        id="phone"
                        type="tel"
                        placeholder="+234..."
                        required
                        className="text-gray-900"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                </div>
            </div>

            <div className="pt-4">
                <Button
                    type="submit"
                    size="lg"
                    className="w-full h-14 text-lg bg-[var(--brand-color)] hover:bg-[var(--brand-color)]/90 text-white cursor-pointer relative overflow-hidden"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Processing Securely...</span>
                        </div>
                    ) : (
                        <span className="flex items-center gap-2">
                            <Lock className="h-4 w-4" /> Pay ₦{amountToPay.toLocaleString()}
                        </span>
                    )}
                </Button>

                <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-400">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Secured by Paystack. Your data is encrypted.</span>
                </div>
            </div>
        </form>
    );
}
