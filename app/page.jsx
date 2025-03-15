import Hero from "@/modules/hero/hero";
import TestimonialsSection from "@/components/sections/testimonials";
import Projects from "@/components/sections/projects";
import Footer from "@/modules/footer/footer";
import AboutSection from "@/components/sections/about";
import TechStack from "@/components/sections/tech";
import ExperienceSection from "@/components/sections/work-section";
import HighlightSection from "@/components/sections/highlight";

export default function Home() {
  return (
    <main className="border-2 border-black">
      <div className="container mx-auto px-10 border-2">
        <Hero />
        {/* <AboutSection />
        <HighlightSection />
        <TestimonialsSection />
        <TechStack />
        <ExperienceSection />
        <Projects />
        <Footer /> */}
      </div>
    </main>
  );
}
