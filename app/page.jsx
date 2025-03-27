import Hero from "@/modules/hero/hero";
import Navbar from "@/modules/navbar/navbar";
import TestimonialsSection from "@/components/sections/testimonials";
import Projects from "@/components/sections/projects";
import Footer from "@/modules/footer/footer";
import AboutSection from "@/components/sections/about";
import TechStack from "@/components/sections/tech";
import ExperienceSection from "@/components/sections/work";
import HighlightSection from "@/components/sections/highlight";

export default function Home() {
  return (
    <main
      className="relative before:absolute before:top-0 before:left-0 before:w-full
     before:h-full before:content-[''] before:opacity-[0.05] before:-z-5 before:pointer-events-none
     before:bg-[url('/static/img/noise.gif')]"
    >
      <div className="container max-w-5xl w-full grid grid-cols-1 mobile:gap-y-[5rem] desktop:gap-y-[10rem] ">
        <Navbar />
        <Hero />
        <AboutSection />
        <TechStack />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
