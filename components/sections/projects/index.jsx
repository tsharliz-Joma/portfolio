import React from "react";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import PortfolioGrid from "./Projects";

const Projects = () => {
  return (
    <Section id="Projects Section">
      <div className="container grid gap-14 py-20">
        <SectionHeader className="py-16">Projects</SectionHeader>
        <PortfolioGrid />
      </div>
    </Section>
  );
};

export default Projects;
