"use client";
import React, {forwardRef, useState} from "react";
import content from "./work.json";
import WorkExperienceCard from "@/components/ui/work-card";
import {useGSAP} from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import {generateRandomColors} from "@/lib/helper";
import {generateColorsProp} from "@/lib/helper";
gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = forwardRef(({className, ...props}, ref) => {
  const items = content.Work;
  const colors = content.colors;
  const [bgColors, setBgColors] = useState([]);

  useGSAP(() => {
    setBgColors(generateColorsProp(content, "Work", colors));
    const tl = gsap.timeline({});

    tl.from(".work-container", {
      yPercent: -100,
      opacity: 0,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".work-container",
        start: "top+=800 center",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      id="Work Experience"
      style={{
        backgroundColor: `${
          bgColors[Math.floor(Math.random() * colors.length)]
        }`,
      }}
      className={`work-container z-[2] text-[#000] relative top-[-90px] py-20 rounded-b-3xl text-center`}>
      <div className="container">
        <h1 className="text-4xl tracking-[2.5px] font-extrabold mb-8">
          Work Experience
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 transition-opacity duration-700">
          {items.map((item, index) => (
            <WorkExperienceCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
});
ExperienceSection.displayName = "Work Experience";
export default ExperienceSection;
