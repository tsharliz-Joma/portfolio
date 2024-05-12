"use client";
import React, { useState } from "react";
import Link from "next/link";

const ProjectCard = ({ title, url, repo, image }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="w-full mx-auto h-auto">
      <div
        style={{ backgroundImage: `url(${image?.mobileSrc})` }}
        className="w-full   relative overflow-hidden bg-[center_top]  bg-cover rounded-xl h-[356px] sm:h-[400px]"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {hover && (
          <div className="absolute inset-0 flex flex-col gap-[30px] justify-center items-center bg-blue-700 bg-opacity-80">
            <p className="p-2 text-white sm:text-2xl sm:font-extrabold sm:tracking-[2.5px]">
              {title}
            </p>
            <Link
              className="hover:cursor-pointer p-2 text-white sm:text-xl sm:font-bold sm:tracking-[2px]"
              href={url}
              target="_blank"
            >
              Live Site
            </Link>
            <Link
              className="hover:cursor-pointer p-2 text-white sm:text-[18px] sm:font-extrabold sm:tracking-[1.75px]"
              href={repo}
              target="_blank"
            >
              Repo
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

ProjectCard.displayName = "Project Card";
export default ProjectCard;
