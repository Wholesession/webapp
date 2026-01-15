"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Download, Loader2, XCircle, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

import { trackEvent, identifyUser } from "@/lib/analytics";

function SuccessContent() {
    const searchParams = useSearchParams();
    const reference = searchParams.get('reference');
    const discordStatus = searchParams.get('discord');
    const [status, setStatus] = useState<'verifying' | 'success' | 'error'>('verifying');
    const [orderData, setOrderData] = useState<any>(null);

    useEffect(() => {
        if (!reference) {
            setStatus('error');
            return;
        }

        async function verifyPayment() {
            try {
                const res = await fetch('/api/payment/verify', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ reference })
                });

                if (res.ok) {
                    const data = await res.json();
                    setOrderData(data.order);
                    setStatus('success');

                    // Track Success with Mixpanel
                    if (data.order && data.order.users) {
                        const user = data.order.users;
                        identifyUser(user.id, user.email, user.full_name);
                        trackEvent("Payment Success", {
                            course: data.order.course_slug,
                            amount: data.order.amount_paid,
                            reference: reference
                        });
                    }
                } else {
                    setStatus('error');
                }
            } catch (error) {
                console.error("Verification failed", error);
                setStatus('error');
            }
        }

        verifyPayment();

        if (discordStatus === 'success') {
            trackEvent("Discord Verified", { reference });
        }
    }, [reference, discordStatus]);

    if (status === 'verifying') {
        return (
            <div className="flex flex-col items-center justify-center py-12">
                <Loader2 className="w-12 h-12 text-[#372772] animate-spin mb-4" />
                <h2 className="text-xl font-semibold text-gray-900">Verifying Payment...</h2>
                <p className="text-gray-500 text-sm mt-2">Please wait while we confirm your enrollment.</p>
            </div>
        );
    }

    if (status === 'error') {
        return (
            <div className="pt-14 pb-10 px-8 text-center items-center flex flex-col">
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                    <XCircle className="w-8 h-8 text-red-600" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Verification Failed</h1>
                <p className="text-gray-500 mb-8 max-w-[280px]">
                    We couldn't verify your payment reference. If you were debited, please contact support.
                </p>
                <Link href="/" className="w-full">
                    <Button variant="outline" className="w-full h-12 rounded-xl">
                        Return Home
                    </Button>
                </Link>
            </div>
        )
    }

    return (
        <div className="pt-10 pb-10 px-8 text-center flex flex-col items-center">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Enrollment Successful!</h1>
            <p className="text-gray-500 mb-8 text-sm">
                Welcome to the cohort! We've sent a detailed confirmation email to your inbox.
            </p>

            <div className="space-y-4 w-full">
                {/* Discord Section */}
                {discordStatus === 'success' ? (
                    <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5 text-left flex items-start gap-4 shadow-sm">
                        <div className="bg-indigo-500 p-2.5 rounded-xl shadow-md ring-4 ring-indigo-50">
                            <MessageSquare className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h3 className="font-bold text-indigo-900 text-sm">Discord Access Granted</h3>
                            <p className="text-xs text-indigo-700/80 mt-1 leading-relaxed">
                                You've been added to the server and assigned your Student role. Check your Discord!
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="bg-[#5865F2]/5 border border-[#5865F2]/10 rounded-2xl p-5 text-left flex flex-col gap-4 shadow-sm">
                        <div className="flex items-start gap-4">
                            <div className="bg-[#5865F2] p-2.5 rounded-xl shadow-md ring-4 ring-[#5865F2]/10">
                                <MessageSquare className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 text-sm">Unlock Private Channels</h3>
                                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                                    Connect your Discord to join the student-only lounge and get your role instantly.
                                </p>
                            </div>
                        </div>
                        <Link href={`/api/auth/discord/login?reference=${reference}`} className="w-full">
                            <Button className="w-full h-11 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-xl font-bold flex items-center justify-center gap-2 group transition-all active:scale-[0.98] font-body cursor-pointer">
                                <MessageSquare className="w-4 h-4" />
                                Claim Discord Access
                            </Button>
                        </Link>
                    </div>
                )}

                {/* Download Section */}
                <a
                    href={orderData?.course_slug ? `/syllabus/${orderData.course_slug}.pdf` : '#'}
                    download
                    className="block bg-gray-50 rounded-2xl p-5 text-left flex items-start gap-4 border border-gray-100 hover:border-gray-200 transition-all group"
                >
                    <div className="bg-white p-2.5 rounded-xl border border-gray-100 shadow-sm group-hover:bg-purple-50 transition-colors">
                        <Download className="w-5 h-5 text-[#372772]" />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900 text-sm">Course Design</h3>
                        <p className="text-xs text-gray-500 mt-1 leading-relaxed">Download your curriculum and community guidelines.</p>
                    </div>
                </a>
            </div>

            <div className="mt-10 w-full">
                <Link href="/" className="w-full text-center">
                    <Button className="w-full h-14 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-2xl font-bold text-[1.2rem] shadow-xl shadow-gray-200 uppercase tracking-wide group font-body cursor-pointer">
                        Go to Home
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default function CheckoutSuccessPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-body">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden text-center relative"
            >
                {/* Decorative Top Pattern */}
                <div className="h-32 bg-[#372772] relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                                <circle cx="1" cy="1" r="1" fill="white" />
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#grid)" />
                        </svg>
                    </div>
                </div>

                <Suspense fallback={
                    <div className="flex flex-col items-center justify-center py-12">
                        <Loader2 className="w-8 h-8 text-gray-300 animate-spin" />
                    </div>
                }>
                    <SuccessContent />
                </Suspense>

            </motion.div>
        </div>
    );
}
