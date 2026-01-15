import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrustedBy } from "@/components/trusted-by";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { CourseSection } from "@/components/course-section";
// import { Instructors } from "@/components/instructors";
import { Footer } from "@/components/footer";
import { FocusAreas } from "@/components/focus-areas";
import { Faq } from "@/components/faq";
import { getAllCourses } from "@/lib/courses";

export default async function Home() {
  const courses = await getAllCourses();

  const pmCourses = courses.filter(c => c.category === "Product");
  const designCourses = courses.filter(c => c.category === "Design");
  const engCourses = courses.filter(c => c.category === "Engineering" || c.category === "AI");

  return (
    <main className="min-h-screen bg-white text-black selection:bg-purple-500/30 font-body">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <HowItWorks />
      <h2 className="text-4xl font-semibold text-[#0a0c1b] bg-gray-50 w-full mx-auto text-center py-6">Featured courses</h2>
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
