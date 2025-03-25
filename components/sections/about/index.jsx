"use client";
import React, { forwardRef, useRef, useState } from "react";
import Details from "./Details";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Section from "@/components/ui/section";
import Data from "./About.content.json";
import FlashUiCarousel from "@/components/ui/flashui-carousel/flashui-carousel";
gsap.registerPlugin(ScrollTrigger);

const AboutSection = forwardRef(({ className, ...props }, ref) => {
  const { About } = Data;
  const containerRef = useRef(null);

  return (
    <Section
      id="About Section"
      ref={containerRef}
      className={`container rounded-[2rem] max-w-6xl mx-auto shadow-custom-blur`}
    >
      <FlashUiCarousel list={About} />
    </Section>
  );
});

AboutSection.displayName = "About Section";
export default AboutSection;
