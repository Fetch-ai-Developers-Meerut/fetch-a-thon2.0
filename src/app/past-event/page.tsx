import Navbar from "@/components/Navbar";
import PreviousEventSection from "@/sections/PreviousEventSection";
import TeamSection from "@/sections/TeamSection";

export default function Home() {
  return (
    <section className="w-full bg-backgroundGradient py-6 px-8 sm:px-12 flex flex-col">
      <Navbar />
      <PreviousEventSection />
      {/* <Footer /> */}
    </section>
  );
}
