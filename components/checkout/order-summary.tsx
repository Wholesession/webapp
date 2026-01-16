"use client";

import { Course } from "@/lib/courses";
import { ShieldCheck, Clock, Calendar } from "lucide-react";

interface OrderSummaryProps {
    course: Course;
}

export function OrderSummary({ course }: OrderSummaryProps) {
    return (
        <div className="bg-gray-50 p-6 lg:p-10 h-full font-body">
            <h2 className="text-lg font-body font-medium text-gray-900 mb-6">Order Summary</h2>

            <div className="flex gap-4 mb-6">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-gray-200">
                    <div className="absolute inset-0 bg-gray-200 text-gray-900 font-semibold flex items-center justify-center font-body text-xs">
                        {course.category}
                    </div>
                </div>
                <div>
                    <h3 className="text-sm font-body font-medium text-gray-900 line-clamp-2">{course.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">{course.subtitle}</p>
                </div>
            </div>

            <div className="space-y-4 border-t border-gray-200 pt-6 mb-6">
                <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 flex items-center gap-2 font-body">
                        <Calendar className="h-4 w-4" /> Start Date
                    </span>
                    <span className="font-medium text-gray-900 font-body">{course.startDate}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 flex items-center gap-2 font-body">
                        <Clock className="h-4 w-4" /> Duration
                    </span>
                    <span className="font-medium text-gray-900 font-body">{course.duration}</span>
                </div>
            </div>

            {course.status !== "Coming Soon" && (
                <div className="border-t border-gray-200 pt-6 mb-8">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-base text-gray-600 font-body">Total</span>
                        <span className="text-2xl font-bold text-gray-900 font-body">₦{course.price.toLocaleString()}</span>
                    </div>
                </div>
            )}

            <div className="flex items-start gap-3 p-4 rounded-lg border border-gray-200 font-body">
                <ShieldCheck className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <div>
                    <h4 className="text-sm font-medium text-green-900 font-body">Secure Checkout</h4>
                    <p className="text-xs mt-1 text-gray-500 font-body">
                        Your payment is secured with 256-bit SSL encryption. We offer a 30-day money-back guarantee.
                    </p>
                </div>
            </div>
        </div>
    );
}
