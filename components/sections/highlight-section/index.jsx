"use client";
import React, { useRef, useState } from "react";
import content from "./HighlightStrip.content.json";
import HighlightCard from "../../ui/highlight-card";
import Divider from "../../ui/divider";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { generateRandomColors } from "@/lib/helper";
import { BasicCarousel } from "@/components/ui/carousel";
gsap.registerPlugin(ScrollTrigger);

const HighlightStrip = () => {
  const HighlightItems = content.Items;
  const highlightCardTextRef = useRef([]);
  const [bgColors, setBgColors] = useState([]);

  useGSAP(() => {
    setBgColors(generateRandomColors(content, "Items"));
    const tl = gsap.timeline({});

    tl.from(".highlights-container", {
      yPercent: -100,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".highlights-container",
        start: "top bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="w-full">
      <div
        style={{
          backgroundColor: bgColors[1],
          border: `1px solid ${bgColors[4]}`,
        }}
        className="highlights-container relative top-[-20px] border-black border-2 py-20 text-black rounded-b-3xl z-[10]"
      >
        <div className="highlights-inner container  sm:justify-items-center w-full grid grid-cols-1 md:grid-cols-4 gap-5">
          {/* <BasicCarousel {...HighlightItems}/> */}
          {HighlightItems.map((item, index) => (
            <div className="stagger" key={index}>
              <HighlightCard
                ref={highlightCardTextRef}
                bg={bgColors[index]}
                key={index}
                {...item}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

HighlightStrip.displayName = "Highlight strip";
export default HighlightStrip;
