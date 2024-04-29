'use client'
import React, { useState } from "react";

const ProjectCard = ({ content }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="w-full md:w-1/2">
      <div
        className="relative overflow-hidden bg-white rounded-xl h-[400px]"
     
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {hover && (
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-blue-800 bg-opacity-80">
            <p className="text-white">Title</p>
            <p className="text-white">Live Site</p>
            <p className="text-white">Repo</p>
          </div>
        )}
      </div>
    </div>
  );
};

ProjectCard.displayName = "Project Card";
export default ProjectCard;