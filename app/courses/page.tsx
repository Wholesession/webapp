
import { getAllCourses } from "@/lib/courses";
export const revalidate = 0;
import CoursesPageContent from "@/components/courses-page-content";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "All Courses | Wholesession",
    description: "Browse our comprehensive catalog of tech, product, and business courses.",
};

import { Suspense } from "react";

export default async function Page() {
    const courses = await getAllCourses();

    return (
        <Suspense fallback={<div>Loading courses...</div>}>
            <CoursesPageContent courses={courses} />
        </Suspense>
    );
}
