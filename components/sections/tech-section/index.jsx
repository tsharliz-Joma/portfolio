"use client";
import React from "react";
import TechCard from "@/components/ui/tech-card";
import content from "./TechStack.content.json";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { generateRandomColors } from "@/lib/helper";
gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  const techStack = content.TechStack;

  useGSAP(() => {
    const tl = gsap.timeline({});

    tl.from(".tech-container", {
      yPercent: -100,
      opacity: 0,
      ease: "power2.inOut",
      duration: 0.75,
      scrollTrigger: {
        trigger: ".tech-container",
        start: "top+=500 center",
        scrub: true,
      },
    }, "");
  }, []);

  return (
    <section className="tech-container text-center bg-white border-black border-2 py-12 relative top-[-57px] z-[7] rounded-b-3xl">
      <div className="flex flex-col max-w-7xl container">
       
          <p className="text-5xl font-extrabold text-black tracking-[2.5px] uppercase mb-8">
            Tech Stack
          </p>
      

        <div className="flex flex-wrap justify-around">
          {techStack.map((item, index) => (
            <div
              className="stagger w-1/2 sm:w-1/5 container flex justify-center"
              key={index}
            >
              <TechCard key={index} content={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
