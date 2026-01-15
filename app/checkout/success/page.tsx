"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Download, Loader2, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

function SuccessContent() {
    const searchParams = useSearchParams();
    const reference = searchParams.get('reference');
    const [status, setStatus] = useState<'verifying' | 'success' | 'error'>('verifying');

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
                    setStatus('success');
                } else {
                    setStatus('error');
                }
            } catch (error) {
                console.error("Verification failed", error);
                setStatus('error');
            }
        }

        verifyPayment();
    }, [reference]);

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
            <div className="pt-14 pb-10 px-8">
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                    <XCircle className="w-8 h-8 text-red-600" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Verification Failed</h1>
                <p className="text-gray-500 mb-8">
                    We couldn't verify your payment reference. If you were debited, please contact support.
                </p>
                <Link href="/">
                    <Button variant="outline" className="w-full h-12 rounded-xl">
                        Return Home
                    </Button>
                </Link>
            </div>
        )
    }

    return (
        <div className="pt-14 pb-10 px-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h1>
            <p className="text-gray-500 mb-8">
                You've successfully secured your spot. A confirmation email with onboarding details has been sent to your inbox.
            </p>

            <div className="space-y-3">
                <div className="bg-gray-50 rounded-xl p-4 text-left flex items-start gap-3 border border-gray-100">
                    <div className="bg-white p-2 rounded-full border border-gray-100 shadow-sm">
                        <Download className="w-4 h-4 text-[#372772]" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900 text-sm">Download Syllabus</h3>
                        <p className="text-xs text-gray-500">Get a head start on the curriculum.</p>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <Link href="/">
                    <Button className="w-full h-12 bg-[#0a0c1b] hover:bg-[#0a0c1b]/90 text-white rounded-xl font-medium">
                        Return to Home <ArrowRight className="w-4 h-4 ml-2" />
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
