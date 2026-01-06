import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { CourseSection } from "@/components/course-section";
// import { Instructors } from "@/components/instructors";
import { Footer } from "@/components/footer";
import { FocusAreas } from "@/components/focus-areas";

import { courses } from "@/lib/courses";

const pmCourses = courses.filter(c => c.category === "Product");
const designCourses = courses.filter(c => c.category === "Design");
const engCourses = courses.filter(c => c.category === "Engineering" || c.category === "AI");

import { Faq } from "@/components/faq";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black selection:bg-purple-500/30">
      <Navbar />
      <Hero />
      <Features />
      <CourseSection title="Engineering" courses={engCourses} />
      <CourseSection title="Product" courses={pmCourses} />
      <CourseSection title="Design" courses={designCourses} />
      {/* <Instructors /> */}
      <FocusAreas />
      <Faq />
      <Footer />
    </main>
  );
}
