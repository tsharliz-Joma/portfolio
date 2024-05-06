import React from 'react';

const TestimonialCard = React.forwardRef(({ content, ...props }, ref) => {
  return (
    <div
      key={content}
      className='bg-gray-800 text-white p-5 rounded-2xl'
      ref={ref}
    >
      {/* Title */}
      <div className='text-lg mb-2 text-gray-500'>{content.Title}</div>

      {/* Description */}
      <div className='text-2xl mb-5 tracking-[0.5px]'>{content.Description}</div>

      {/* Author */}
      <div className='text-lg text-gray-500'>{content.Author}</div>
    </div>
  );
});

TestimonialCard.displayName = 'TestimonialCard';
export default TestimonialCard;
