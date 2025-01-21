import Header from "@/components/Header";
import TestimonialsSection from "@/components/sections/testimonials";
import Projects from "@/components/sections/projects";
import Footer from "@/components/Footer/Footer.component";
import AboutSection from "@/components/sections/about";
import TechStack from "@/components/sections/tech";
import ExperienceSection from "@/components/sections/work-section";
import { NextUIProvider } from "@nextui-org/react";
import HighlightSection from "@/components/sections/highlight";

export default function Home() {
  return (
    <main className="w-full bg-black dark:bg-gray-900 font-anta text-white dark:text-white">
      <NextUIProvider>
        <Header />
        <section className="container mx-auto px-5 py-24">
          <AboutSection />
        </section>
        <section className="container mx-auto px-5 py-24">
          <HighlightSection />
        </section>
        <section className="container mx-auto px-5 py-24">
          <TestimonialsSection />
        </section>
        <section className="container mx-auto px-5 py-24">
          <TechStack />
        </section>
        <section className="container mx-auto px-5 py-24">
          <ExperienceSection />
        </section>
        <section className="container mx-auto px-5 py-24">
          <Projects />
        </section>
        <Footer />
      </NextUIProvider>
    </main>
  );
}
