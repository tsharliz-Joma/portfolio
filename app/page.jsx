import Image from 'next/image';
import styles from '../styles/globals.scss';
import Navbar from '../components/Navbar/Navbar.component';
import Hero from '@/components/Hero/Hero.component';
import HeroImage from '../content/hero-image.png';
import Header from '@/components/Header/Header.component';
import HighlightStrip from '@/components/HighlightStrip/HighlightStrip.component';
import Testimonials from '@/components/Testimonials/Testmonials.component';
import Projects from '@/components/Projects/Projects.component';
import Footer from '@/components/Footer/Footer.component';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Header />
      <Hero src={HeroImage} alt={'hero Image'} maxWidth={'lg'} />
      <HighlightStrip />
      <Testimonials />
      <Projects />
      <Footer />
    </main>
  );
}
