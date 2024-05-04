import Image from 'next/image';

const Hero = ({ src, alt, maxWidth }) => {
  // Converting maxWidth to a Tailwind class
  const maxWidthClass = maxWidth ? `max-w-${maxWidth}` : '';

  return (
    <div className={`container mx-auto px-base ${maxWidthClass} border-2 border-border-green`}>
      <div className="relative flex justify-center items-center border-base rounded-base overflow-hidden h-624 max-h-624">
        <Image src={src} alt={alt} layout='responsive' />
      </div>
    </div>
  );
};

export default Hero;