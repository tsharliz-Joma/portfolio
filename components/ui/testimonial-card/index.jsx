import React from 'react';

const TestimonialCard = React.forwardRef(({ content, ...props }, ref) => {
  return (
    <div key={content} className="bg-gray-800 text-white p-5" ref={ref}>
      {/* Title */}
      <div className="text-lg mb-2">{content.Title}</div>

      {/* Description */}
      <div className="text-2xl mb-5">{content.Description}</div>

      {/* Author */}
      <div className="text-lg">{content.Author}</div>
    </div>
  );
});

TestimonialCard.displayName = 'TestimonialCard';
export default TestimonialCard;
