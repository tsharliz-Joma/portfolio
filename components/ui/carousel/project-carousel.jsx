"use client";
import React, { forwardRef, useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./carousel-ui";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "react-responsive";
import ProjectCard from "../project-card";

const ProjectCarousel = forwardRef(({ className, items, ...props }, ref) => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const isDesktop = useMediaQuery({ minWidth: "640px" });

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Function to chunk items into groups of 4
  const chunkItems = (items) => {
    const chunked = [];
    for (let i = 0; i < items.length; i += 4) {
      chunked.push(items.slice(i, i + 4));
    }
    return chunked;
  };

  const chunkedItems = chunkItems(items);

  return (
    <div>
      <Carousel
        className={cn("w-full", className)}
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
      >
        <CarouselContent className="flex">
          {chunkedItems.map((chunk, index) => (
            <CarouselItem key={index} className="flex-shrink-0 w-full sm:w-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-10">
                {chunk.map((item, itemIndex) => (
                  <ProjectCard key={itemIndex} className={`${index * 4 + itemIndex === current ? "opacity-100" : "opacity-50"} transition-opacity duration-1000 ease-out`} {...item} />
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute top-1/2 left-0 hidden sm:block transform -translate-y-1/2 z-10">
        <button onClick={() => api && api.scrollPrev()} className="p-2 relative bg-transparent hover:left-[-2px] text-white rounded-full shadow-lg">
          &#8592;
        </button>
      </div>
      <div className="absolute top-1/2 right-0  hidden sm:block  transform -translate-y-1/2 z-10">
        <button onClick={() => api && api.scrollNext()} className="p-2 relative hover:right-[-2px] bg-transparent text-white rounded-full shadow-lg">
          &#8594;
        </button>
      </div>
    </div>
  );
});

ProjectCarousel.displayName = "Project Carousel";

export { ProjectCarousel };
