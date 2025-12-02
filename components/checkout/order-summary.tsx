"use client";

import { Course } from "@/lib/courses";
import { ShieldCheck, Clock, Calendar } from "lucide-react";
import Image from "next/image";

interface OrderSummaryProps {
    course: Course;
}

export function OrderSummary({ course }: OrderSummaryProps) {
    return (
        <div className="bg-gray-50 p-6 lg:p-10 h-full">
            <h2 className="text-lg font-serif font-medium text-gray-900 mb-6">Order Summary</h2>

            <div className="flex gap-4 mb-6">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-gray-200">
                    {/* Fallback image or course specific image if we had one, using instructor image for now or a placeholder */}
                    <div className="absolute inset-0 bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xs">
                        {course.category}
                    </div>
                </div>
                <div>
                    <h3 className="text-sm font-medium text-gray-900 line-clamp-2">{course.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">{course.subtitle}</p>
                </div>
            </div>

            <div className="space-y-4 border-t border-gray-200 pt-6 mb-6">
                <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 flex items-center gap-2">
                        <Calendar className="h-4 w-4" /> Start Date
                    </span>
                    <span className="font-medium text-gray-900">{course.startDate}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 flex items-center gap-2">
                        <Clock className="h-4 w-4" /> Duration
                    </span>
                    <span className="font-medium text-gray-900">{course.duration}</span>
                </div>
            </div>

            <div className="border-t border-gray-200 pt-6 mb-8">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-base text-gray-600">Total</span>
                    <span className="text-2xl font-bold text-gray-900">₦{course.price.toLocaleString()}</span>
                </div>
            </div>

            <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg border border-green-100">
                <ShieldCheck className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <div>
                    <h4 className="text-sm font-medium text-green-900">Secure Checkout</h4>
                    <p className="text-xs text-green-700 mt-1">
                        Your payment is secured with 256-bit SSL encryption. We offer a 30-day money-back guarantee.
                    </p>
                </div>
            </div>
        </div>
    );
}
