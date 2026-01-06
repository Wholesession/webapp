"use client";

import { Course } from "@/lib/courses";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Star, ArrowRight, ShieldCheck } from "lucide-react";

interface PricingCardProps {
    course: Course;
}

export function PricingCard({ course }: PricingCardProps) {
    return (
        <div className="sticky top-24 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 space-y-6">
                {/* Header: Price & Rating */}
                <div className="flex items-center justify-between">
                    <div>
                        <span className="text-2xl font-bold text-gray-900">₦{(course.price).toLocaleString()}</span>
                        {/* <span className="text-sm text-gray-500 ml-1">USD</span> */}
                    </div>
                    {course.rating > 0 && (
                        <div className="flex items-center gap-1">
                            {/* <div className="flex text-[#F59E0B]">
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                                <Star className="w-4 h-4 fill-current" />
                            </div> */}
                            {/* <span className="text-sm font-semibold text-gray-700">{course.rating}</span>
                            <span className="text-xs text-gray-400">({course.reviewsCount})</span> */}
                        </div>
                    )}
                </div>

                {/* Cohort Info */}
                <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Next Cohort</h4>
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-gray-900 font-semibold">{course.startDate} — {course.duration}</span>
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-0.5 rounded">
                            {Math.ceil((new Date(course.startDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days left to enroll
                        </span>
                    </div>
                </div>

                {/* Primary CTA */}
                <Button className="w-full bg-[#372772] hover:bg-[#372772]/80 text-white text-lg font-semibold py-6 rounded-lg transition-colors cursor-pointer">
                    Enroll
                </Button>

                {/* Email Capture */}
                {/* <div className="space-y-2 pt-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Get Course Updates</label>
                    <div className="flex gap-2">
                        <Input
                            placeholder="Your email"
                            className="bg-gray-50 border-gray-200 focus-visible:ring-gray-300"
                        />
                        <Button size="icon" className="bg-[#372772] hover:bg-[#372772]/80 text-white shrink-0">
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                    </div>
                </div> */}

                {/* Secondary Links */}
                {/* <div className="flex items-center justify-between text-sm font-medium pt-2">
                    <button className="text-gray-900 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900">
                        Get reimbursed
                    </button>
                    <button className="text-gray-900 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900">
                        Save 20%+ with a team
                    </button>
                </div> */}
            </div>

            {/* Footer Guarantee */}
            <div className="bg-gray-50 px-6 py-4 flex items-center justify-center gap-2 border-t border-gray-100">
                <ShieldCheck className="w-5 h-5 text-gray-400" />
                <span className="text-sm font-medium text-gray-600">Covered by the <span className="underline decoration-gray-300">WholeSession Guarantee</span></span>
            </div>
        </div>
    );
}
