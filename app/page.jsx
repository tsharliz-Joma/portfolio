import Image from "next/image";
import Navbar from "../components/Navbar/Navbar.component";
import Hero from "@/components/Hero/Hero.component";
import HeroImage from "../content/hero-image.png";
import Header from "@/components/Header/Header.component";
import HighlightStrip from "@/components/sections/highlight-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import Projects from "@/components/sections/projects-section/Projects.component";
import Footer from "@/components/Footer/Footer.component";
import About from "@/components/sections/about-section";
import TechStack from "@/components/sections/tech-section";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <Header />
      <About />
      {/* <HighlightStrip />
      <TestimonialsSection />
      <TechStack />
      <Projects />
      <Footer /> */}
    </main>
  );
}
