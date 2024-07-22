"use client";
import React from "react";
import content from "./Projects.content.json";
import ProjectCard from "@/components/ui/project-card";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import {generateRandomColors} from "@/lib/helper";
import {ProjectCarousel} from "@/components/ui/carousel/project-carousel";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const items = content.Projects;

  // useGSAP(() => {
  //   const tl = gsap.timeline({});

  //   tl.from(".projects-container", {
  //     yPercent: -100,
  //     opacity: 0,
  //     ease: "power2.inOut",
  //     scrollTrigger: {
  //       trigger: ".projects-container",
  //       start: "top+=800 center",
  //       scrub: true,
  //     },
  //   });
  // }, []);

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
        {/* {Projects.map((item, index) => (
            <div key={index}>
              <ProjectCarousel item={item} />
            </div>
          ))} */}
      </div>
    </section>
  );
};

export default Projects;
