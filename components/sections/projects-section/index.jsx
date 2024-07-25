import React from "react";
import content from "./Projects.content.json";
import {ProjectCarousel} from "@/components/ui/carousel/project-carousel";

const Projects = () => {
  const items = content.Projects;

  return (
    <section
      id="Projects"
      className="projects-container bg-black py-20 min-h-screen relative z-[0] rounded-b-3xl">
      <div className="container py-20 flex flex-col gap-12">
        <div className="">
          <p className="text-white text-5xl tracking-[3.5px] font-bold uppercase">
            Projects
          </p>
        </div>
        <ProjectCarousel items={items} className="" />
      </div>
    </section>
  );
};

export default Projects;
