'use client';
import React, { useState } from 'react';
import content from './HighlightStrip.content.json';
import HighlightCard from '../../ui/highlight-card';
import { Divider } from '@/components/ui/divider';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { generateRandomColors } from '@/lib/helper';
gsap.registerPlugin(ScrollTrigger);

const HighlightStrip = () => {
  const HighlightItems = content.Items;
  const [bgColors, setBgColors] = useState([]);



  useGSAP(() => {
    setBgColors(generateRandomColors(content, 'Items'));
    const tl = gsap.timeline({});

    tl.from('.highlights-container', {
      yPercent: -100,
      opacity: 0.5,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '.highlights-container',
        start: 'top bottom',
        scrub: true,
      },
    });
  }, []);

  return (
    <div className=''>
      <div
        style={{
          backgroundColor: bgColors[1],
          border: `1px solid ${bgColors[4]}`,
        }}
        className='highlights-container container relative top-[-20px] mx-auto py-20 text-black rounded-b-3xl z-[3]'
      >
        <div className='highlights-inner grid grid-cols-1 md:grid-cols-4 gap-5'>
          {HighlightItems.map((item, index) => (
            <div className='stagger' key={index}>
              <HighlightCard bg={bgColors[index]} key={index} content={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

HighlightStrip.displayName = 'Highlight strip';
export default HighlightStrip;
