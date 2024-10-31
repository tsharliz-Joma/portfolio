"use client";
import React, { forwardRef, useRef, useState } from "react";
import Details from "./Details";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Section from "@/components/ui/section";
gsap.registerPlugin(ScrollTrigger);

const AboutSection = forwardRef(({ className, ...props }, ref) => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const [bgColors, setBgColors] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // useGSAP(() => {
  //   setBgColors(generateRandomColors(content, "About"));

  //   const vh = window.innerHeight;
  //   const totalHeight = content.About.length * vh;

  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: containerRef.current,
  //       start: "top top",
  //       end: `+=${totalHeight}`,
  //       scrub: 0.5,
  //       pin: true,
  //       anticipatePin: 1,
  //       onUpdate: (self) => {
  //         const progress = self.progress;
  //         const newIndex = Math.floor(progress);
  //         if (newIndex !== activeIndex) {
  //           setActiveIndex(newIndex);
  //         }
  //       },
  //       onLeave: () => {
  //         document.body.style.overflow = "auto";
  //       },
  //       onEnterBack: () => {
  //         document.body.style.overflow = "auto";
  //       },
  //     },
  //   });

  //   cardsRef.current.forEach((card, index) => {
  //     tl.from(card, {
  //       xPercent: 100,
  //       duration: 0.75,
  //       ease: "power2.inOut",
  //     });
  //   });
  //   ScrollTrigger.addEventListener("refreshInit", () => {
  //     document.body.style.overflow = "auto";
  //   });

  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //     document.body.style.overflow = "auto";
  //   };
  // }, []);

  return (
    <Section id="About Section" ref={containerRef} className={`container border-[0.5px] border-black rounded-[50px] max-w-6xl mx-auto shadow-custom-blur`}>
      <Details />
    </Section>
  );
});

AboutSection.displayName = "About Section";
export default AboutSection;
