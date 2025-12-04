"use client";

import { Course } from "@/lib/courses";
import { CheckCircle2 } from "lucide-react";

interface OutcomesProps {
    outcomes: string[];
}

export function Outcomes({ outcomes }: OutcomesProps) {
    return (
        <section className="py-24 bg-white border-b border-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <h2 className="text-3xl font-serif font-medium text-gray-900">
                        What you'll achieve
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {outcomes.map((outcome, index) => (
                        <div key={index} className="flex gap-4 p-6 rounded-xl bg-purple-50/50 border border-purple-100">
                            <CheckCircle2 className="h-6 w-6 text-[#372772] shrink-0" />
                            <p className="text-lg text-black font-medium">{outcome}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
