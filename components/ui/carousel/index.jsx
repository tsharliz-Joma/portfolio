"use client";
import React, { forwardRef, useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./carousel-ui";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "react-responsive";
import TestimonialCard from "../testimonial-card";

const BasicCarousel = forwardRef(({ className, items, ...props }, ref) => {
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

  return (
    <div className="relative overflow-hidden">
      <Carousel
        className={cn("w-full", className)}
        opts={{
          align: "center",
          loop: true,
        }}
        setApi={setApi}
      >
        <CarouselContent className="flex">
          {items?.map((item, index) => (
            <CarouselItem
              key={index}
              className={cn(
                "transition-opacity duration-1000 ease-out",
                index === current ? "opacity-100" : "opacity-50",
                // Use different widths for mobile and desktop
                isDesktop ? "max-w-[900px]" : "w-[80vw] max-w-[336px]"
              )}
            >
              <TestimonialCard {...item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
});

BasicCarousel.displayName = "Basic Carousel";

export { BasicCarousel };