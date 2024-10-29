import React from "react";
import Section from "@/components/ui/section";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Testimonials from "./Testimonials";

const TestimonialsSection = () => {
  return (
    <Section id="Testimonials Section">
      <Testimonials />
    </Section>
  );
};

TestimonialsSection.displayName = "Testimonials Section";
export default TestimonialsSection;
