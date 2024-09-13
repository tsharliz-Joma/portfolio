import React, { forwardRef } from "react";
import content from "./work.json";
import { VerticalTimelineV1 } from "@/components/ui/vertical-timeline";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";

const ExperienceSection = forwardRef(({ className, ...props }, ref) => {
  const items = content.Work;

  return (
    <Section
      id="Work Experience Section"
      className={`text-white relative py-20 `}
    >
      <div className="container">
        <SectionHeader>Work Experience</SectionHeader>
        <VerticalTimelineV1 items={items} />
      </div>
    </Section>
  );
});
ExperienceSection.displayName = "Work Experience";
export default ExperienceSection;
