import React from "react";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import LogoBar from "./logobar";

const TechStack = () => {
  return (
    <Section id="Tech Stack Section">
      <div className="tech-container bg-transparent py-48 relative">
        <div className="w-[80%] md:w-[90%] mx-auto flex flex-col justify-around text-center py-20">
          <SectionHeader className="py-8 mobile:py-12">Tech Stack I Use</SectionHeader>
          <LogoBar />
        </div>
      </div>
    </Section>
  );
};

export default TechStack;
