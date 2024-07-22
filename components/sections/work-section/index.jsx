import React, { forwardRef } from "react";
import content from "./work.json";
import { VerticalTimelineV1 } from "@/components/ui/vertical-timeline";

const ExperienceSection = forwardRef(({ className, ...props }, ref) => {
  const items = content.Work;
  const colors = content.colors;

  return (
    <section id="Work Experience" className={`z-[2] border-2 border-blue text-white relative py-20 text-center`}>
      <div className="container border-2 border-red">
        <h1 className="text-4xl tracking-[2.5px]font-extrabold mb-8">Work Experience</h1>
        <VerticalTimelineV1 items={items} />
      </div>
    </section>
  );
});
ExperienceSection.displayName = "Work Experience";
export default ExperienceSection;
