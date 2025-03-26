"use client";
import React, { forwardRef, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Section from "@/components/ui/section";
import Data from "./about.json";
import FlashUiCarousel from "@/components/ui/flashui-carousel/flashui-carousel";
gsap.registerPlugin(ScrollTrigger);

const AboutSection = forwardRef(({ className, ...props }, ref) => {
  const { About } = Data;
  const containerRef = useRef(null);

  return (
    <Section
      id="about"
      ref={containerRef}
      className={`container rounded-[2rem] 
        mx-auto shadow-custom-blur`}
    >
      <FlashUiCarousel list={About} />
    </Section>
  );
});

AboutSection.displayName = "About Section";
export default AboutSection;
