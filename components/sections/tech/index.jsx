import React from "react";
import Section from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import LogoBar from "./logobar";
import { cn } from "@/lib/utils";

const TechStack = () => {
  return (
    <Section
      id="tech"
      className={cn(
        `max-w-6xl mobile:max-w-md mx-auto`, 
        `container shadow-custom-blur`,
        `p-3 py-6`,
        `border shadow-xl rounded-2xl backdrop-blur-md border-neutral-300/40`
      )}
    >
      <div className="">
        <SectionHeader className="pb-sm">Tech Stack</SectionHeader>
        <p className="pb-sm">Technology stack that i have learnt, used and am comfortable with.</p>
        <LogoBar />
      </div>
    </Section>
  );
};

export default TechStack;
