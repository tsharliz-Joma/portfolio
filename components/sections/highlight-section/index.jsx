import React from 'react';
import content from './HighlightStrip.content.json';
import HighlightCard from '../../ui/highlight-card';
import { Divider } from '@/components/ui/divider';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const HighlightStrip = () => {
  const HighlightItems = content.Items;


  return (
    <div>
      <div className='container relative top-[-20px] mx-auto py-20 bg-black text-white rounded-b-3xl'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
          {HighlightItems.map((item, index) => (
            <HighlightCard key={index} content={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

HighlightStrip.displayName = 'Highlight strip';
export default HighlightStrip;
