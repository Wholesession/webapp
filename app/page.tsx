import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { CourseSection } from "@/components/course-section";
import { Instructors } from "@/components/instructors";
import { Footer } from "@/components/footer";
import { FocusAreas } from "@/components/focus-areas";

const pmCourses = [
  {
    title: "User research with AI for Product Managers",
    rating: 4.7,
    startDate: "Starts February 10",
    instructors: [
      {
        name: "Ogunbore Florence",
        role: "Product Manager @Piggyvest",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100",
      },
    ],
  },
];

const designCourses = [
  {
    title: "Product Design for Modern Interfaces",
    rating: 4.8,
    startDate: "Starts February 10",
    instructors: [
      {
        name: "Michael Stanley",
        role: "Product Designer @Piggyvest",
        image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=100&h=100",
      },
    ],
  },
];

const engCourses = [
  {
    title: "Backend Systems & Architecture for real world scale",
    rating: 4.8,
    startDate: "Starts February 10",
    instructors: [
      {
        name: "Olumide Abegunde",
        role: "Software Engineer @Moniepoint",
        image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=100&h=100",
      },
    ],
  },
  {
    title: "Build production-grade frontend with Next.js",
    rating: 4.9,
    startDate: "Starts Jan 25",
    instructors: [
      {
        name: "Oghenerukevwe Jeff",
        role: "Engineering Manager @Access Bank",
        image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=100&h=100",
      },
    ],
  },
  {
    title: "Machine learning & AI Engineering",
    rating: 4.9,
    startDate: "Starts Feb 20",
    instructors: [
      {
        name: "Yuzheng Sun, PhD",
        role: "Founder",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100&h=100",
      },
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black selection:bg-purple-500/30">
      <Navbar />
      <Hero />
      <CourseSection title="Engineering" courses={engCourses} />
      <CourseSection title="Product" courses={pmCourses} />
      <CourseSection title="Design" courses={designCourses} />
      <FocusAreas />
      {/* <Features /> */}
      {/* <Courses /> */}
      {/* <Instructors /> */}
      <Footer />
    </main>
  );
}
