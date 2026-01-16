
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { RefreshCcw, MessageCircle, ArrowLeft } from 'lucide-react';

export default function PaymentCancelled() {
    return (
        <main className="min-h-screen bg-white font-body selection:bg-purple-100">
            <Navbar theme="light" />

            <div className="flex flex-col items-center justify-center pt-48 pb-32 px-4 text-center">
                <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mb-8">
                    <RefreshCcw className="w-10 h-10 text-amber-500" />
                </div>

                <h1 className="text-4xl md:text-5xl font-medium text-black mb-6">
                    Payment was not completed
                </h1>

                <p className="text-lg text-gray-600 max-w-lg mx-auto mb-12">
                    Don't worry, your spot isn't lost yet! If you had trouble with the payment gateway
                    or have questions about the curriculum, we're here to help.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                    <Link
                        href="/courses"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#0a0c1b] text-white rounded-xl font-medium hover:bg-black transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Try Again
                    </Link>

                    <Link
                        href="https://wa.me/2347000000000" // Replace with actual WhatsApp link
                        target="_blank"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-green-50 text-green-700 border border-green-100 rounded-xl font-medium hover:bg-green-100 transition-all active:scale-[0.98]"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Chat with Support
                    </Link>
                </div>
            </div>

            <Footer />
        </main>
    );
}
