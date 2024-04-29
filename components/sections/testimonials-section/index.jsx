'use client'
import React from 'react';
import content from './Testimonials.content.json';
import TestimonialCard from '@/components/ui/testimonial-card';

const TestimonialsSection = () => {
  const testimonials = content.Testimonials;

  return (
    <div className="container bg-gray-500">
      <div className="mx-auto py-12">
        <div className="flex flex-col justify-start items-center gap-7">
          <div className="">
            {testimonials.map((item, index) => (
              <TestimonialCard key={index} content={item} />
            ))}
          </div>
          <div className="flex justify-center">
            <div className="w-48 h-48 rounded-full bg-gray-800"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

TestimonialsSection.displayName = 'Testimonials Section'
export default TestimonialsSection