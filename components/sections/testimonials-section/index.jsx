"use client";
import React, { useState } from "react";
import gsap from "gsap";
import content from "./Testimonials.content.json";
import TestimonialCard from "@/components/ui/testimonial-card";
import { useGSAP } from "@gsap/react";
import { generateRandomColors } from "@/lib/utils";
import ScrollTrigger from "gsap/ScrollTrigger";
import { BasicCarousel } from "@/components/ui/carousel";
import Particles from "@/components/ui/particles";

gsap.registerPlugin(ScrollTrigger);

const TestimonialsSection = () => {
  const items = content.Testimonials;
  const [bgColors, setBgColors] = useState([]);

  return (
    <section className="testimonials-container pt-[70px] cursor-grab active:cursor-grabbing pb-10 bg-transparent relative">
      <Particles className="absolute pointer-events-none" />
      <div className="container-xl grid">
        <BasicCarousel items={items} />
      </div>
    </section>
  );
};

TestimonialsSection.displayName = "Testimonials Section";
export default TestimonialsSection;
