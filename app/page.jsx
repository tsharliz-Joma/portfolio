import Image from 'next/image';
import Navbar from '@/components/navbar';
import Hero from '@/components/ui/hero';
import HeroImage from '../content/hero-image.png';
import Header from '@/components/header';
import HighlightStrip from '@/components/sections/highlight-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import Projects from '@/components/sections/projects-section';
import Footer from '@/components/footer/Footer.component';
import AboutSection from '@/components/sections/about-section';
import TechStack from '@/components/sections/tech-section';
import ThemeProvider from '@mui/material/styles/ThemeProvider';

export default function Home() {
  // setupAnimations()
  return (
    <main className='w-full bg-black text-white '>
      <Navbar />
      <Header />
      <AboutSection />
      <HighlightStrip />
      <TestimonialsSection />
      <TechStack />
      <Projects />
      <Footer />
    </main>
  );
}
