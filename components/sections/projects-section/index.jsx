'use client'
import React from 'react';
import content from './Projects.content.json';
import ProjectCard from '@/components/ui/project-card';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { generateRandomColors } from '@/lib/helper';
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const Projects = content.Projects;

  useGSAP(() => {
    const tl = gsap.timeline({});

    tl.from('.projects-container', {
      yPercent: -100,
      opacity: 0,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '.projects-container',
        start: 'top+=400 bottom',
        scrub: true,
      },
    });
  }, []);

  return (
    <div className='projects-container bg-charcoal min-h-screen relative top-[-75px] z-[0] rounded-b-3xl'>
      <div className='container mx-auto py-20 flex flex-col gap-12'>
        <div className=''>
          <p className='text-white text-5xl tracking-[3.5px] font-bold uppercase'>
            Projects
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          {Projects.map((item, index) => (
            <div key={index}>
              <ProjectCard content={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
