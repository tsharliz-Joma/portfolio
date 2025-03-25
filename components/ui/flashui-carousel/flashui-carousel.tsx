"use client";
import React from "react";
import Image from "next/image";
import { HTMLAttributes, useEffect, useState } from "react";
import Spotify from "../spotify";
import { cn } from "@/lib/utils";

const List = ({ item, className, index, activeItem, ...props }: any) => {
  return (
    <div
      className={cn(
        "relative flex h-full w-20 min-w-10 cursor-pointer overflow-hidden rounded-md transition-all delay-0 duration-300 ease-in-out",
        {
          "flex-grow": index === activeItem,
        },
        className
      )}
      {...props}
    >
      <div className="w-full h-full bg-black bg-opacity-50">
  
      </div>
      {index === activeItem && (
        <>
          <div className="absolute bottom-4 left-4 min-w-fit text-white md:bottom-8 md:left-8">
            <div className="text-2xl font-bold md:text-4xl">{item.title}</div>
            <div className="mt-2 text-sm md:mt-4 md:text-lg opacity-90">{item.description}</div>
          </div>
          {item.spotify && (
            <div className="absolute right-0 inset-0">
              <Spotify uri={item.spotify.uri} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

const FlashUiCarousel = ({ list, autoPlay = true, className, ...props }: any) => {
  const [activeItem, setActiveItem] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!autoPlay) {
      return;
    }

    const interval = setInterval(() => {
      if (!isHovering) {
        setActiveItem((prev) => (prev + 1) % list.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, list.length, isHovering]);

  return (
    <div className={cn("flex h-[80vh] w-full gap-1", className)}>
      {list.map((item: any, index: any) => (
        <List
          key={item.title}
          item={item}
          index={index}
          activeItem={activeItem}
          onMouseEnter={() => {
            setActiveItem(index);
            setIsHovering(true);
          }}
          onMouseLeave={() => {
            setIsHovering(false);
          }}
        />
      ))}
    </div>
  );
};

export default FlashUiCarousel;
