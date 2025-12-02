import { Button } from "@/components/ui/button";
import { Course } from "@/lib/courses";
import { Check } from "lucide-react";
import Link from "next/link";

interface PricingCardProps {
    course: Course;
}

export function PricingCard({ course }: PricingCardProps) {
    return (
        <section className="py-24 bg-gray-50 border-t border-gray-200">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <div className="rounded-3xl bg-white p-8 ring-1 ring-gray-200 shadow-xl sm:p-10">
                    <h3 className="text-base font-semibold leading-7 text-purple-600">
                        Invest in your career
                    </h3>
                    <div className="mt-4 flex items-baseline gap-x-2">
                        <span className="text-5xl font-bold tracking-tight text-gray-900">
                            ₦{course.price.toLocaleString()}
                        </span>
                        <span className="text-base text-gray-500">
                            NGN
                        </span>
                    </div>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                        Join the next cohort starting {course.startDate}. <br />Limited spots available.
                    </p>

                    <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                        {[
                            "Live interactive sessions",
                            "Lifetime access to course materials",
                            "Private community access",
                            "Certificate of completion",
                            "Direct access to instructor",
                        ].map((feature) => (
                            <li key={feature} className="flex gap-x-3">
                                <Check className="h-6 w-5 flex-none text-purple-600" aria-hidden="true" />
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <Link href={`/checkout/${course.slug}`} className="block mt-10 w-full">
                        <Button size="lg" className="w-full bg-black text-white hover:bg-gray-800 h-14 text-lg cursor-pointer">
                            Secure your spot
                        </Button>
                    </Link>
                    <p className="mt-4 text-xs text-center text-gray-500">
                        30-day money-back guarantee. No questions asked.
                    </p>
                </div>
            </div>
        </section>
    );
}
