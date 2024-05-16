import React, {forwardRef} from "react";
import Image from "next/image";
import content from "./work.json";
import WorkExperienceCard from "@/components/ui/work-card";

const ExperienceSection = forwardRef(({className, ...props}, ref) => {
  const items = content.Work;
  return (
    <section className="text-center">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8">Experience</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 transition-opacity duration-700">
          {items.map((item, index) => (
            <WorkExperienceCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
});
ExperienceSection.displayName = "Work Experience";
export default ExperienceSection;
