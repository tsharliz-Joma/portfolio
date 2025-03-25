
import React from "react";
import Section from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import LogoBar from "./logobar";

const TechStack = () => {
  return (
    <Section id="Tech Stack Section" className={`container  max-w-6xl mx-auto shadow-custom-blur`}>
      <div className="">
        <SectionHeader className="pb-sm">Tech Stack</SectionHeader>
        <p className="pb-sm">Technology stack that i have learnt, used and am comfortable with.</p>
        <LogoBar />
      </div>
    </Section>
  );
};

export default TechStack;
