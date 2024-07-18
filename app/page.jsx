
import Header from "@/components/Header";
import HighlightStrip from "@/components/sections/highlight-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import Projects from "@/components/sections/projects-section";
import Footer from "@/components/Footer/Footer.component";
import AboutSection from "@/components/sections/about-section";
import TechStack from "@/components/sections/tech-section";
import ExperienceSection from "@/components/sections/work-section";
import NextUiNav from "@/components/Navbar/nextui-navbar";
import {NextUIProvider} from "@nextui-org/react";

export default function Home() {
  return (
    <main className="w-full bg-black text-white ">
      <NextUIProvider>
        <NextUiNav />
        <Header />
        <AboutSection />
        <HighlightStrip />
        <TestimonialsSection />
        <TechStack />
        <ExperienceSection />
        <Projects />
        <Footer />
      </NextUIProvider>
    </main>
  );
}
