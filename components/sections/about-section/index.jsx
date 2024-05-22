"use client";
import React, {forwardRef, useEffect, useRef, useState} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import AboutCard from "../../ui/about-card";
import content from "./About.content.json";
import CustomCard from "../../ui/custom-card";
import {generateRandomColors} from "@/lib/helper";
gsap.registerPlugin(ScrollTrigger);

const AboutSection = forwardRef(({className, ...props}, ref) => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const [bgColors, setBgColors] = useState([]);

  useGSAP(() => {
    // here is generates 3 colors and sets the state to an array of the three colors
    setBgColors(generateRandomColors(content, "About"));

    const vh = window.innerHeight;
    const totalHeight = content.About.length * vh; // Adjust as necessary for your content

    // Set up the GSAP timeline and ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${totalHeight}`,
        scrub: 0.5,
        pin: true,
        anticipatePin: 1,

        onLeave: () => {
          // This is triggered when the scroll passes the end of the pinned section
          document.body.style.overflow = "auto"; // Ensure scrolling is enabled when leaving the pinned section
        },
        onEnterBack: () => {
          // This is triggered when scrolling back into the pinned section
          document.body.style.overflow = "auto"; // Disable scrolling to lock in place while pinned
        },
      },
    });

    tl.from(".about-card", {
      yPercent: -100,
      // opacity: 0,
      duration: 0.75,
      stagger: 1,
      ease: "power2.inOut",
    });

    // Make sure to refresh ScrollTrigger on resize or orientation changes which might affect layout
    ScrollTrigger.addEventListener("refreshInit", () => {
      document.body.style.overflow = "auto";
    });

    return () => {
      // Cleanup function to remove all ScrollTrigger instances and reset overflow
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      id="About"
      ref={containerRef}
      className="min-h-screen section-container relative overflow-y-scroll w-full z-[20]">
      <div className="w-full relative flex">
        <div className="flex flex-col justify-start items-start gap-7 w-full ">
          {content.About.map((item, index) => (
            <AboutCard
              // here the bg color is set to one of the 3 that are set in the state
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
    </div>
  );
});

AboutSection.displayName = "About Section";
export default AboutSection;
