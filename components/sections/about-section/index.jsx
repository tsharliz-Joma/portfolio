"use client";
import {useRef, useEffect} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import AboutCard from "../../ui/about-card";
import content from "./About.content.json";
import CustomCard from "../../ui/custom-card";
gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    const tl = gsap.timeline();

    gsap.utils.toArray(cardsRef.current).forEach((card, index) => {
      tl.from(card, {
        y: "500px",
        duration: 3,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "top 100px",
          markers: true,
          scrub: true,
          
        },
        stagger: 0.9 * index, // Adjust stagger timing based on index
      });
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="container pt-20 pb-10 w-full h-screen relative border-2 border-red">
      <div className="flex flex-col gap-7 w-full relative">
        {content.About.map((item, index) => (
          <AboutCard
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            content={item}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
