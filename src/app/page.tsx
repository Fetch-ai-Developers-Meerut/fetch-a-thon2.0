import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AboutSection from "@/sections/AboutSection";
import FaqSection from "@/sections/FaqSection";
import HeroSection from "@/sections/HeroSection";
import PerksSection from "@/sections/PerksSection";
import PreviousEventSection from "@/sections/PreviousEventSection";
import SponsorSection from "@/sections/SponsorSection";
import TeamSection from "@/sections/TeamSection";
import TimelineSection from "@/sections/TimelineSection";

export default function Home() {
  return (
    <section className="w-full min-h-screen bg-backgroundGradient text-red-500">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PerksSection />
      <TeamSection />
      <PreviousEventSection />
      <TimelineSection />
      <SponsorSection />
      <FaqSection/>
      <Footer/>
    </section>
  );
}
