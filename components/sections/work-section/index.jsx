import React, { forwardRef } from "react";
import Data from "./work.json";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import { VerticalTimelineV1 } from "@/components/ui/vertical-timeline";

const ExperienceSection = forwardRef(({ className, ...props }, ref) => {
  const { Work } = Data;



  return (
    <Section id="Work Experience Section" className={`container border-[0.5px] border-black rounded-[50px] max-w-6xl mx-auto shadow-custom-blur`}>
      <SectionHeader className="p-16">Work Experience</SectionHeader>
      <VerticalTimelineV1 items={Work} />
    </Section>
  );
});
ExperienceSection.displayName = "Work Experience";
export default ExperienceSection;
