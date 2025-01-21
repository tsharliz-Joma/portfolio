"use client";
import React, { forwardRef, useRef, useState } from "react";
import Details from "./Details";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Section from "@/components/ui/section";
import Data from "./About.content.json";
gsap.registerPlugin(ScrollTrigger);

const AboutSection = forwardRef(({ className, ...props }, ref) => {
  const { About } = Data;
  const containerRef = useRef(null);

  return (
    <Section
      id="About Section"
      ref={containerRef}
      className={`container border-[0.5px] border-black rounded-[2rem] max-w-6xl mx-auto shadow-custom-blur`}
    >
      <div className="grid desktop:grid-cols-2 grid-cols-1 gap-[0.5rem]">
        {About.map((content, index) => (
          <Details key={index} index={index} About={content} />
        ))}
      </div>
    </Section>
  );
});

AboutSection.displayName = "About Section";
export default AboutSection;
