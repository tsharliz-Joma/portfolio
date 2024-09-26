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
      <div className="tech-container bg-transparent py-12 relative">
        <div className="container">
          <SectionHeader>Tech Stack</SectionHeader>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
            {techStack.map((item, index) => (
              <TechCard key={index} content={item} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TechStack;
