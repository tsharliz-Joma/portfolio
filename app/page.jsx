import Header from "@/components/Header";
import HighlightStrip from "@/components/Sections/highlight-section";
import TestimonialsSection from "@/components/Sections/testimonials-section";
import Projects from "@/components/Sections/projects-section";
import Footer from "@/components/Footer/Footer.component";
import AboutSection from "@/components/Sections/about-section";
import TechStack from "@/components/Sections/tech-section";
import ExperienceSection from "@/components/Sections/work-section";
import NextUiNav from "@/components/Navbar/nextui-navbar";
import Particles from "@/components/ui/particles";
import {NextUIProvider} from "@nextui-org/react";
import HighlightSection from "@/components/Sections/highlight-section";

export default function Home() {
  const RGBA = {r: 0, g: 191, b: 255, a: 1};

  return (
    <main className="w-full bg-black font-anta text-white ">
      <NextUIProvider>
        <NextUiNav />
        <Particles className="absolute inset-0 pointer-events-none" />
        <Header />
        <AboutSection />
        <Particles blendMode>
          <HighlightSection />
          <TestimonialsSection />
        </Particles>
        <Particles backgroundColor="white" blendMode blendBottom blendTop>
          <TechStack />
        </Particles>
        <Particles>
          <ExperienceSection />
        </Particles>
        <Particles backgroundColor="black" blendMode blendBottom>
          <Projects />
        </Particles>
        <Particles blendTop blendMode>
          <Footer />
        </Particles>
      </NextUIProvider>
    </main>
  );
}
