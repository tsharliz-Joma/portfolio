"use client";
import React, {forwardRef, useRef, useState} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import AboutCard from "../../ui/about-card";
import content from "./About.content.json";
import {generateRandomColors} from "@/lib/utils";
import Section from "@/components/ui/section";
gsap.registerPlugin(ScrollTrigger);

const AboutSection = forwardRef(({className, ...props}, ref) => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const [bgColors, setBgColors] = useState([]);

  useGSAP(() => {
    setBgColors(generateRandomColors(content, "About"));

    const vh = window.innerHeight;
    const totalHeight = content.About.length * vh;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${totalHeight}`,
        scrub: 0.5,
        pin: true,
        anticipatePin: 1,

        onLeave: () => {
          document.body.style.overflow = "auto";
        },
        onEnterBack: () => {
          document.body.style.overflow = "auto";
        },
      },
    });

    cardsRef.current.forEach((card, index) => {
      tl.from(card, {
        xPercent: 100,
        duration: 0.75,
        ease: "power2.inOut",
      });
    });
    ScrollTrigger.addEventListener("refreshInit", () => {
      document.body.style.overflow = "auto";
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <Section
      id="About Section"
      ref={containerRef}
      className="min-h-screen section-container relative overflow-y-scroll overflow-x-hidden w-full">
      <div className="w-full relative flex overflow-x-hidden">
        <div className="flex flex-col justify-start items-start gap-7 w-full ">
          {content.About.map((item, index) => (
            <AboutCard
              modalBg={item.bg}
              bg={bgColors[index]}
              className="about-card"
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              content={item}
            />
          ))}
        </div>
      </div>
    </Section>
  );
});

AboutSection.displayName = "About Section";
export default AboutSection;
