"use client";
import React from "react";
import TechCard from "@/components/ui/tech-card";
import content from "./TechStack.content.json";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";

const TechStack = () => {
  const techStack = content.TechStack;

  return (
    <Section id="Tech Stack Section">
      <div className="tech-container  bg-transparent  py-12 relative">
        <div className="grid container">
          <SectionHeader>Tech Stack</SectionHeader>
          <div className="flex flex-wrap justify-around">
            {techStack.map((item, index) => (
              <div
                className="stagger w-1/2 sm:w-1/5 container flex justify-center"
                key={index}
              >
                <TechCard key={index} content={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TechStack;
