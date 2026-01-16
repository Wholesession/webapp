import { getCourseBySlug, getAllCourses } from "@/lib/courses";
import { Footer } from "@/components/footer";
import { CourseHeader } from "@/components/course/course-header";
import { CourseHero } from "@/components/course/course-hero";
import { Syllabus } from "@/components/course/syllabus";
import { Instructors } from "@/components/course/instructor-section";
import { Logistics } from "@/components/course/logistics";
import { PricingCard } from "@/components/course/pricing-card";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import { Included } from "@/components/course/included";
import { Schedule } from "@/components/course/schedule";
import { FAQ } from "@/components/course/faq";
import { Metadata } from "next";

export async function generateStaticParams() {
    const courses = await getAllCourses();
    return courses.map((course) => ({
        slug: course.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const course = await getCourseBySlug(resolvedParams.slug);

    if (!course) {
        return {
            title: "Course Not Found",
        };
    }

    const ogUrl = new URL(`${process.env.NEXT_PUBLIC_APP_URL || 'https://wholesession.com'}/api/og`);
    ogUrl.searchParams.set('title', course.title);
    ogUrl.searchParams.set('subtitle', course.subtitle);
    ogUrl.searchParams.set('category', course.category);

    return {
        title: course.title,
        description: course.tagline || course.subtitle,
        keywords: [course.category, ...(course.tools || []), "Wholesession course", "tech bootcamp"],
        openGraph: {
            title: course.title,
            description: course.subtitle,
            type: "article",
            images: [
                {
                    url: ogUrl.toString(),
                    width: 1200,
                    height: 630,
                    alt: course.title,
                },
            ],
        },
    };
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
    // Await params mainly for Next.js 15+ future compatibility, though strictly not needed if sync
    const resolvedParams = await params;
    const course = await getCourseBySlug(resolvedParams.slug);

    if (!course) {
        notFound();
    }

    // JSON-LD structured data for SEO
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Course",
        name: course.title,
        description: course.description, // Need to handle markdown stripping if possible, but raw is okay for now
        provider: {
            "@type": "Organization",
            name: "Wholesession",
            sameAs: "https://www.wholesession.com",
        },
        offers: {
            "@type": "Offer",
            category: "Paid",
            price: course.price,
            priceCurrency: "NGN",
        },
        hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: "online",
            courseWorkload: course.duration,
            instructor: course.instructors.map(inst => ({
                "@type": "Person",
                name: inst.name,
                description: inst.bio
            }))
        }
    };

    return (
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <CourseHeader course={course} />

            <CourseHero course={course} />

            <div className="container mx-auto px-4 lg:px-8 py-12 relative font-body">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Main Content Column */}
                    <div className="lg:col-span-8 space-y-16">
                        {/* Overview / Outcomes Section */}
                        <section>
                            <div className="mb-12">
                                <h2 className="text-4xl font-body text-[#0a0c1b] mb-6 font-normal">{course.tagline}</h2>
                                <div className="prose prose-lg text-gray-700 max-w-none">
                                    <ReactMarkdown>
                                        {course.description}
                                    </ReactMarkdown>
                                </div>
                            </div>

                            {course.status !== "Coming Soon" && (
                                <div className="rounded-2xl p-8 border border-[#eee]">
                                    <h3 className="text-4xl font-body font-normal text-[#0a0c1b] mb-6">What you'll be able to do at the end of this course</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {course.outcomes.map((outcome, i) => (
                                            <div key={i} className="flex items-center gap-3 text-[1rem]">
                                                <CheckCircle2 className="w-5 h-5 text-[#0a0c1b] flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700 prose prose-lg font-body">{outcome}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </section>

                        {course.status !== "Coming Soon" && (
                            <>
                                <Logistics course={course} />
                                <Included course={course} />
                                <Syllabus course={course} />
                                <Schedule course={course} />
                                <FAQ course={course} />
                                <Instructors course={course} />
                            </>
                        )}
                    </div>

                    <div className="lg:col-span-4 sticky top-24">
                        <PricingCard course={course} />
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
