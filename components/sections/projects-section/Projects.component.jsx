import React from "react";
import content from "./Projects.content.json";
import ProjectCard from "@/components/ui/project-card";

const Projects = () => {
  const Projects = content.Projects;
  return (
    <div className="bg-charcoal min-h-screen">
      <div className="container mx-auto py-20 flex flex-col gap-12">
        <div className="">
          <p className="text-white text-5xl font-bold">Projects</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {Projects.map((item, index) => (
            <div key={index}>
              <ProjectCard content={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
