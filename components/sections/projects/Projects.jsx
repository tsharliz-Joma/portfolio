"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";

const projects = [
  {
    id: "01",
    img: "https://images.unsplash.com/photo-1720048169707-a32d6dfca0b3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Innovative Branding",
    des: "Transforming your brand identity with creative solutions that resonate.",
  },
  {
    id: "02",
    img: "https://images.unsplash.com/photo-1709884735626-63e92727d8b6?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Business Growth Strategies",
    des: "Unlocking new avenues for business success through strategic development.",
  },
  {
    id: "03",
    img: "https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Precision Engineering",
    des: "Delivering high-quality solutions tailored to your specific needs.",
  },
  {
    id: "04",
    img: "https://images.unsplash.com/photo-1613919517761-0d9e719d3244?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Digital Marketing Excellence",
    des: "Crafting impactful marketing strategies that elevate your brand presence.",
  },
];

export default function PortfolioGrid() {
  return (
    <section>
      <div className="my-10">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Our Blogs</h1>

        <p className="mt-4 text-center text-gray-500 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-5 pb-10 lg:px-16 lg:pb-16">
        {projects.map((project) => (
          <motion.article key={project.id} className="relative group shadow-lg overflow-hidden rounded-xl">
            {/* Image with a slight hover scale effect */}
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="h-72 w-full">
              <Image src={project.img} alt={project.title} height={600} width={1200} className="h-full w-full object-cover transition-transform duration-500 ease-in-out rounded-xl" />
            </motion.div>

            {/* Project Info Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-sm text-gray-300 mt-2">{project.des}</p>
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
