'use client';
import * as React from 'react';
import TechCard from '@/components/ui/tech-card';
import content from './TechStack.content.json';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { generateRandomColors } from '@/lib/helper';
gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  const techStack = content.TechStack;

  useGSAP(() => {
    const tl = gsap.timeline({});

    tl.from('.tech-container', {
      yPercent: -100,
      opacity: 0,
      ease: 'power2.inOut',
      duration: 0.75,
      scrollTrigger: {
        trigger: '.tech-container',
        start: 'top+=500 bottom',
        scrub: true,
      },
    });
  }, []);

  return (
    <div className='tech-container text-center bg-white py-20 relative top-[-57px] z-[1] rounded-b-3xl'>
      <div className='flex flex-col gap-12 max-w-7xl container'>
        <div className=''>
          <h2 className='text-5xl font-extrabold text-black tracking-[3.5px] uppercase'>
            Tech Stack
          </h2>
        </div>
        <div className='flex justify-center overflow-x-auto'>
          <div className='grid grid-cols-2 sm:grid-row-1 gap-[40px]'>
            {techStack.map((item, index) => (
              <div className='stagger' key={index}>
                <TechCard key={index} content={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
