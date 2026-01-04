import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AboutHero } from "@/components/about/about-hero";
import { OurMission } from "@/components/about/our-mission";
import { OurValues } from "@/components/about/our-values";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <AboutHero />
            <OurMission />
            <OurValues />
            <Footer />
        </main>
    );
}
