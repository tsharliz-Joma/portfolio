import React from "react";
import Section from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import PortfolioGrid from "./Projects";

const Projects = () => {
  return (
    <Section id="projects" className={`container shadow-custom-blur`}>
      <SectionHeader className="pb-sm">Projects</SectionHeader>
      <p className="dark:text-gray-300 pb-md">A few of my prized possessions.</p>
      <PortfolioGrid />
    </Section>
  );
};

export default Projects;
