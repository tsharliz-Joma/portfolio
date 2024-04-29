import React from "react";
import TechCard from "@/components/ui/tech-card";
import content from "./TechStack.content.json";

const TechStack = () => {
  const techStack = content.TechStack;
  return (
    <div className="text-center py-20">
      <div className="flex flex-col gap-12 max-w-7xl">
        <div className="">
          <h2 className="text-5xl font-extrabold text-gray-900">Tech Stack</h2>
        </div>
        <div className="flex justify-center overflow-x-auto">
          <div className="grid grid-cols-2 sm:grid-row-1 gap-[40px]">
            {techStack.map((item, index) => (
              <TechCard key={index} content={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;

/* Tailwind CSS Styles */
