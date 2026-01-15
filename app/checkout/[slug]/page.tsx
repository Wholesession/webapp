import { getCourseBySlug, getAllCourses } from "@/lib/courses";
import { CheckoutForm } from "@/components/checkout/checkout-form";
import { OrderSummary } from "@/components/checkout/order-summary";
import { Navbar } from "@/components/navbar";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const courses = await getAllCourses();
    return courses.map((course) => ({
        slug: course.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const course = await getCourseBySlug(slug);

    if (!course) {
        return {
            title: "Course Not Found",
        };
    }

    return {
        title: `Checkout - ${course.title} | Wholesession`,
    };
}

export default async function CheckoutPage({ params }: Props) {
    const { slug } = await params;
    const course = await getCourseBySlug(slug);

    if (!course) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white selection:bg-purple-500/30">
            <div className="lg:grid lg:grid-cols-2 lg:min-h-screen">
                {/* Left Column: Form */}
                <div className="relative flex flex-col px-4 sm:px-6 lg:px-8">
                    {/* Header/Nav */}
                    <div className="py-6">
                        <Link href={`/course/${course.slug}`} className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors">
                            <ChevronLeft className="h-4 w-4 mr-1" />
                            Back to course
                        </Link>
                    </div>

                    {/* Form Content */}
                    <div className="flex-1 flex flex-col justify-center max-w-lg mx-auto w-full">
                        <CheckoutForm course={course} />
                    </div>

                    {/* Footer (Mobile only, hidden on desktop if needed, or just simple copyright) */}
                    <div className="py-6 text-xs text-gray-400 text-center lg:text-left">
                        &copy; {new Date().getFullYear()} Wholesession LLC
                    </div>
                </div>

                {/* Right Column: Order Summary (Hidden on mobile, visible on desktop) */}
                <div className="hidden lg:block border-l border-gray-200 bg-gray-50">
                    <div className="sticky top-0 h-screen overflow-y-auto">
                        <OrderSummary course={course} />
                    </div>
                </div>

                {/* Mobile Order Summary (Visible on mobile, hidden on desktop) */}
                <div className="lg:hidden border-t border-gray-200">
                    <OrderSummary course={course} />
                </div>
            </div>
        </main>
    );
}
