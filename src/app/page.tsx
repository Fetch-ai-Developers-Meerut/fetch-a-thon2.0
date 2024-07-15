import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AboutSection from "@/sections/AboutSection";
import CommunitySection from "@/sections/CommunitySection";
import FaqSection from "@/sections/FaqSection";
import HeroSection from "@/sections/HeroSection";
import MentorSection from "@/sections/MentorSection";
import PerksSection from "@/sections/PerksSection";
import PreviousEventSection from "@/sections/PreviousEventSection";
import PrizeSections from "@/sections/PrizeSection";
import SponsorSection from "@/sections/SponsorSection";
import TeamSection from "../sections/TeamSection";
import TimelineSection from "@/sections/TimelineSection";

export default function Home() {
  return (
    <section className="w-full bg-backgroundGradient py-6 px-8 sm:px-12 flex flex-col">
      <Navbar />
      <AboutSection />
      <PerksSection />
      <PrizeSections />
      <SponsorSection />
      <CommunitySection />
      <MentorSection />
      {/* <TeamSection />
      <PreviousEventSection />
      <TimelineSection />
      <FaqSection /> */}
      {/* <Footer /> */}
    </section>
  );
}
