"use client";
import  React, { useState} from "react";
import gsap from "gsap";
import content from "./Testimonials.content.json";
import TestimonialCard from "@/components/ui/testimonial-card";
import { useGSAP } from "@gsap/react";
import { generateRandomColors } from "@/lib/helper";
import ScrollTrigger from "gsap/ScrollTrigger";
import { BasicCarousel } from "@/components/ui/carousel";

gsap.registerPlugin(ScrollTrigger);

const TestimonialsSection = () => {
  const items = content.Testimonials;
  const [bgColors, setBgColors] = useState([]);

  useGSAP(() => {
    setBgColors(generateRandomColors(content, "Testimonials"));
    const tl = gsap.timeline({});

    tl.from(".testimonials-container", {
      yPercent: -100,
      opacity: 0,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".testimonials-container",
        start: "top center",
        scrub: true,
        markers: true
      },
    });
  }, []);

  return (
    <div className="testimonials-container pt-[70px] border-black border-2 pb-10 bg-black relative top-[-40px] rounded-b-3xl z-[2]">
      <div className="">
        <div className="container flex flex-col mx-auto justify-around  gap-7">
          <BasicCarousel items={items} />
        </div>
      </div>
    </div>
  );
};

TestimonialsSection.displayName = "Testimonials Section";
export default TestimonialsSection;
