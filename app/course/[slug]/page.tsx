import { getCourseBySlug, courses } from "@/lib/courses";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CourseHero } from "@/components/course/course-hero";
import { Outcomes } from "@/components/course/outcomes";
import { Syllabus } from "@/components/course/syllabus";
import { Instructor } from "@/components/course/instructor";
import { PricingCard } from "@/components/course/pricing-card";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return courses.map((course) => ({
        slug: course.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const course = getCourseBySlug(slug);

    if (!course) {
        return {
            title: "Course Not Found",
        };
    }

    return {
        title: `${course.title} | Wholesession`,
        description: course.subtitle,
    };
}

export default async function CoursePage({ params }: Props) {
    const { slug } = await params;
    const course = getCourseBySlug(slug);

    if (!course) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white selection:bg-purple-500/30">
            <Navbar />
            <CourseHero course={course} />
            <Outcomes outcomes={course.outcomes} />
            <Syllabus course={course} />
            <Instructor instructors={course.instructors} />
            <PricingCard course={course} />
            <Footer />
        </main>
    );
}
