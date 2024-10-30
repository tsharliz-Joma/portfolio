"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import TechStackData from "./TechStack.content.json";

const LogoBar = () => {
  const { TechStack } = TechStackData;
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    let animationFrameId;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 0.75; // Reduced speed for smoother animation
      if (scrollPosition >= scrollElement.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollElement.style.transform = `translateX(-${scrollPosition}px)`;
      animationFrameId = requestAnimationFrame(scroll);
    };

    scroll();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className="w-full py-12 overflow-hidden bg-white dark:bg-gray-900">
      <div className="mx-auto w-full px-4 md:px-8">
        {/* <h2 className="text-center text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-200">Trusted by Industry Leaders</h2> */}
        <div className="relative">
          <div
            className="flex gap-12 py-4"
            ref={scrollRef}
            style={{
              width: `${TechStack.length * 200}px`,
            }}
          >
            {TechStack.map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-50">
                <Image src={logo.src} alt={`${logo.Title} logo`} width={0} height={0} className={`h-12 w-auto object-contain ${logo.blackFilter ? "brightness-0" : ""}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoBar;
