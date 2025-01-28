"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import Data from "./Projects.content";

export default function PortfolioGrid() {
  const { Projects } = Data;
  return (
    <section className="bg-black dark:bg-gray-900 py-10">
      <div className="container mx-auto px-5">
        <div className="my-10 text-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">My Projects</h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Projects that I am proud of and have built using full stack skills
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Projects.map((project, index) => (
            <motion.article
              key={index}
              className="relative group shadow-lg overflow-hidden rounded-xl bg-white dark:bg-gray-800"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Image with a slight hover scale effect */}
              <motion.div className="h-72 w-full">
                <Image
                  src={project.img.src}
                  alt={project.title}
                  height={600}
                  width={1200}
                  className="h-full w-full object-cover transition-transform duration-500 ease-in-out rounded-t-xl"
                />
              </motion.div>

              {/* Project Info Overlay */}
              <div className="flex flex-col absolute h-full bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <div className="grow grid grid-cols-3 justify-items-center items-center  gap-2">
                  {project.tech?.map((img, index) => (
                    <Image key={index} src={img.src} width={55} height={55} alt="" />
                  ))}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-sm text-gray-300 mt-2">{project.description}</p>
                </div>
              </div>

              {/* Icon at the bottom right */}
              <div className="absolute bottom-5 right-5 p-3 bg-black/70 rounded-full text-white transition-transform duration-500 ease-in-out group-hover:scale-125">
                <a href={project.url} target="_blank" rel="noreferrer">
                  <MoveUpRight className="w-6 h-6" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
