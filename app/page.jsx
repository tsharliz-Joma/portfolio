import Header from "@/components/Header";
import TestimonialsSection from "@/components/sections/testimonials-section";
import Projects from "@/components/sections/projects-section";
import Footer from "@/components/Footer/Footer.component";
import AboutSection from "@/components/sections/about-section";
import TechStack from "@/components/sections/tech-section";
import ExperienceSection from "@/components/sections/work-section";
import NextUiNav from "@/components/Navbar/nextui-navbar";
import Particles from "@/components/ui/particles";
import {NextUIProvider} from "@nextui-org/react";
import HighlightSection from "@/components/sections/highlight-section";

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
