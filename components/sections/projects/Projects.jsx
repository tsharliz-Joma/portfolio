"use client";
import React from "react";
import {motion} from "framer-motion";
import Image from "next/image";
import {MoveUpRight} from "lucide-react";
import Data from "./Projects.content";

export default function PortfolioGrid() {
  const {Projects} = Data;
  return (
    <section>
      <div className="my-10">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          My Projects
        </h1>

        <p className="mt-4 text-center text-gray-500 dark:text-gray-300">
          Projects that i am proud of and have built using full stack skills
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-5 pb-10 lg:px-16 lg:pb-16">
        {Projects.map((project, index) => (
          <motion.article
            key={index}
            className="relative group shadow-lg overflow-hidden rounded-xl">
            {/* Image with a slight hover scale effect */}
            <motion.div
              whileHover={{scale: 1.05}}
              transition={{type: "spring", stiffness: 300, damping: 20}}
              className="h-72 w-full">
              <Image
                src={`${project.img.src}`}
                alt={project.title}
                height={600}
                width={1200}
                className="h-full w-full object-cover transition-transform duration-500 ease-in-out rounded-xl"
              />
            </motion.div>

            {/* Project Info Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-sm text-gray-300 mt-2">
                {project.description}
              </p>
            </div>

            {/* Icon at the bottom right */}
            <div className="absolute bottom-5 right-5 p-3 bg-black/70 rounded-full text-white transition-transform duration-500 ease-in-out group-hover:scale-125">
              <MoveUpRight className="w-6 h-6" />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
