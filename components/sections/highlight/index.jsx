import React from "react";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";

const HighlightSection = () => {
  return (
    <Section id="Highlights Section" className={`container border-[0.5px] border-black rounded-[50px] max-w-6xl mx-auto`}>
      <div className="grid grid-cols-2 gap-24 p-16 relative">
        <div className="">
          <SectionHeader className={`uppercase`}>Resume</SectionHeader>
        </div>
        <div className="absolute inset-y-6 left-1/2 transform -translate-x-1/2 w-[1px] bg-black"></div>
        <div className="">
          <SectionHeader className={`uppercase`}>Map here</SectionHeader>
        </div>
      </div>
    </Section>
  );
};

HighlightSection.displayName = "Highlight Section";
export default HighlightSection;
