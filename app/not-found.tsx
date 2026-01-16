
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { MoveRight, Home } from 'lucide-react';

export default function NotFound() {
    return (
        <main className="min-h-screen bg-white font-body selection:bg-purple-100">
            <Navbar theme="light" />

            <div className="flex flex-col items-center justify-center pt-20 pb-32 px-4 text-center">
                <div className="mb-8">
                    <span className="text-black text-9xl font-semibold">404</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-medium text-black mb-6">
                    Looks like you're lost.
                </h1>

                <p className="text-lg text-gray-600 max-w-lg mx-auto mb-12">
                    The page you're looking for doesn't exist or has been moved.
                    Let's get you back to the right path.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--brand-color)] text-white rounded-xl font-medium hover:bg-[var(--brand-color)] transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
                    >
                        <Home className="w-5 h-5" />
                        Go Home
                    </Link>

                    <Link
                        href="/courses"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-all active:scale-[0.98]"
                    >
                        Browse Courses
                        <MoveRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>

            <Footer />
        </main>
    );
}
