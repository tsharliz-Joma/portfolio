'use client';
import * as React from 'react';
import gsap from 'gsap';
import content from './Testimonials.content.json';
import TestimonialCard from '@/components/ui/testimonial-card';
import { useGSAP } from '@gsap/react';
import { generateRandomColors } from '@/lib/helper';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TestimonialsSection = () => {
  const testimonials = content.Testimonials;
  const [bgColors, setBgColors] = React.useState([]);

  useGSAP(() => {
    setBgColors(generateRandomColors(content, 'Testimonials'));
    const tl = gsap.timeline({});

    tl.from('.testimonials-container', {
      yPercent: -100,
      opacity: 0,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '.testimonials-container',
        start: 'top bottom',
        scrub: true,
      },
    });
  }, []);

  return (
    <div className='testimonials-container container pt-[70px] pb-10 bg-gray-500 relative top-[-40px] rounded-b-3xl z-[2]'>
      <div className='mx-auto '>
        <div className='flex flex-col justify-around items-center gap-7'>
          <div className=''>
            {testimonials.map((item, index) => (
              <TestimonialCard key={index} content={item} />
            ))}
          </div>
          <div className='flex justify-center'>
            <div className='w-48 h-48 rounded-full bg-gray-800'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

TestimonialsSection.displayName = 'Testimonials Section';
export default TestimonialsSection;
