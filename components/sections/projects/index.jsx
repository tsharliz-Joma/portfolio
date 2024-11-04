import React from "react";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import PortfolioGrid from "./Projects";

const Projects = () => {
  return (
    <Section id="Projects Section" className={`container border-[0.5px] border-black rounded-[50px] max-w-6xl mx-auto shadow-custom-blur`}>
      <div className="p-16">
        <SectionHeader>Projects</SectionHeader>
        <PortfolioGrid />
      </div>
    </Section>
  );
};

export default Projects;
