"use client";

import { Users, Gift, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_NUMBER, SUPPORT_EMAIL } from "@/lib/constants";

export function ReferralSection() {
    const referralMessage = "Hi! I want to enroll in a Wholesession course with a friend. How do we get the buddy discount?";
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(referralMessage)}`;

    return (
        <section className="rounded-3xl p-8 text-white overflow-hidden relative group border border-gray-200">

            <div className="relative z-10 flex flex-col gap-10">
                <div className="flex-1 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 text-gray-700 text-base font-bold">
                        <Gift className="w-4 h-4" />
                        Learning is better with friends
                    </div>

                    <h2 className="text-3xl font-bold leading-tight text-gray-600 max-w-[700px]">
                        Enroll with a colleague and <span className="text-[var(--brand-color)]">save an additional ₦10,000 each.</span>
                    </h2>

                    <p className="text-gray-600 text-lg leading-relaxed max-w-[600px]">
                        Wholesession cohorts are built on collaboration. When you and a friend join together, you both receive a direct cashback on your enrollment fees.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a
                            href={`mailto:${SUPPORT_EMAIL}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button className="h-14 text-white hover:bg-[var(--brand-color)] px-8 rounded-xl font-bold text-lg flex cursor-pointer items-center gap-2 group bg-[var(--brand-color)] transition-all active:scale-[0.98]">
                                <MessageCircle className="w-5 h-5 text-white" />
                                Chat with Support
                                <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
