"use client";
import React, {useRef, useState} from "react";
import content from "./HighlightStrip.content.json";
import HighlightCard from "../../ui/highlight-card";
import Divider from "../../ui/divider";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import {generateRandomColors} from "@/lib/helper";
import {BasicCarousel} from "@/components/ui/carousel";
gsap.registerPlugin(ScrollTrigger);

const HighlightStrip = () => {
  const HighlightItems = content.Items;
  const highlightCardTextRef = useRef([]);
  const [bgColors, setBgColors] = useState([]);


  return (

    <section id="Highlights" className="w-full">
      <div className="highlights-container relative py-10 ">

        <div className="highlights-inner container sm:justify-items-center items-center w-full grid grid-cols-1 md:grid-cols-4 gap-5">
          {HighlightItems.map((item, index) => (
            <div className="" key={index}>
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
    </section>
  );
};

HighlightStrip.displayName = "Highlight strip";
export default HighlightStrip;
