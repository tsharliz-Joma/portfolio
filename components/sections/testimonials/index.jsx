import React from "react";
import Section from "@/components/ui/section";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Testimonials from "./Testimonials";

const TestimonialsSection = () => {
  return (
    <Section id="Testimonials Section" className={`container border-[0.5px] border-black rounded-[50px] max-w-6xl mx-auto`}>
      <div className="p-16">
        <Testimonials />
      </div>
    </Section>
  );
};

TestimonialsSection.displayName = "Testimonials Section";
export default TestimonialsSection;
