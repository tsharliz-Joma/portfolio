import React from "react";
import content from "./Projects.content.json";
import { ProjectCarousel } from "@/components/ui/carousel/project-carousel";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";

const Projects = () => {
  const items = content.Projects;

  return (
    <Section id="Projects Section">
      <div className="container grid gap-14 py-20">
        <SectionHeader className="py-16">Projects</SectionHeader>
        <ProjectCarousel items={items} className="" />
      </div>
    </Section>
  );
};

export default Projects;
