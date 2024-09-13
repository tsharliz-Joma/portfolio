"use client";
import React, { useRef, useState } from "react";
import content from "./HighlightStrip.content.json";
import HighlightCard from "../../ui/highlight-card";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { generateRandomColors } from "@/lib/utils";
import { BasicCarousel } from "@/components/ui/carousel";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
gsap.registerPlugin(ScrollTrigger);

const HighlightSection = () => {
  const HighlightItems = content.Items;
  const highlightCardTextRef = useRef([]);
  const [bgColors, setBgColors] = useState([]);

  return (
    <Section id="Highlights Section">
      <div className="highlights-container relative container grid gap-20 py-10">
        <SectionHeader>Skills</SectionHeader>
        <div className="highlights-inner container sm:justify-items-center items-center max-w-6xl grid grid-cols-1 md:grid-cols-4">
          {HighlightItems.map((item, index) => (
            <div className="" key={index}>
              <HighlightCard
                ref={highlightCardTextRef}
                bg={bgColors[index]}
                {...item}
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

HighlightSection.displayName = "Highlight Section";
export default HighlightSection;
