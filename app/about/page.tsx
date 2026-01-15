import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AboutHero } from "@/components/about/hero";
import { MissionVisionValues } from "@/components/about/mission-section";
import { WhyChooseUs } from "@/components/about/why-choose-us";
import { AboutCTA } from "@/components/about/cta-banner";

export const metadata = {
    title: "About Us | Wholesession",
    description: "Learn about our mission to revolutionize technical education.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar theme="light"/>
            <AboutHero />
            <MissionVisionValues />
            <WhyChooseUs />
            <AboutCTA />
            <Footer />
        </main>
    );
}
