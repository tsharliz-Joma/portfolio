import React, { forwardRef } from "react";
import content from "./work.json";
import { VerticalTimelineV1 } from "@/components/ui/vertical-timeline";

const ExperienceSection = forwardRef(({ className, ...props }, ref) => {
  const items = content.Work;
  const colors = content.colors;

  return (
    <section id="Work Experience" className={`z-[2]  text-white relative py-20 `}>
      <div className="container ">
        <h1 className="text-4xl tracking-[2px]font-extrabold mb-8 text-center">Work Experience</h1>
        <VerticalTimelineV1 items={items} />
      </div>
    </section>
  );
});
ExperienceSection.displayName = "Work Experience";
export default ExperienceSection;
