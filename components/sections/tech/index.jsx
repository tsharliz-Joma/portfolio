import React from "react";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import LogoBar from "./logobar";

const TechStack = () => {
  return (
    <Section id="Tech Stack Section" className={`container border-[0.5px] border-black rounded-[50px] max-w-6xl mx-auto shadow-custom-blur`}>
      <div className="p-16">
        <SectionHeader className="2">Tech Stack I Use</SectionHeader>
        <LogoBar />
      </div>
    </Section>
  );
};

export default TechStack;
