"use client";
import React from "react";
import gsap from "gsap";
import content from "./Testimonials.content.json";
import ScrollTrigger from "gsap/ScrollTrigger";
import {BasicCarousel} from "@/components/ui/carousel";
import Particles from "@/components/ui/particles";
import Section from "@/components/ui/section";

gsap.registerPlugin(ScrollTrigger);

const TestimonialsSection = () => {
  const items = content.Testimonials;

  return (
    <Section id="Testimonials Section">
      <div className="testimonials-container cursor-grab active:cursor-grabbing py-28">
        <Particles className="absolute pointer-events-none" />
        <div className="container-xl grid">
          <BasicCarousel items={items} />
        </div>
      </div>
    </Section>
  );
};

TestimonialsSection.displayName = "Testimonials Section";
export default TestimonialsSection;
