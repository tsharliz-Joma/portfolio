"use client";
import React from "react";
import { useEffect, useState } from "react";
import Spotify from "../../components/ui/spotify";
import { cn } from "@/lib/utils";
import Section from "../../components/ui/section";

const List = ({ item, className, index, activeItem, ...props }: any) => {
  const isActive = index === activeItem;
  const backgroundImage = item.image?.src ? { backgroundImage: `url(${item.image.src})` } : {};

  return (
    <div
      className={cn(
        "",
        "relative flex h-full w-20 mobile:w-full min-w-10 bg-cover cursor-pointer overflow-x-hidden rounded-md transition-all delay-0 duration-300 ease-in-out",
        {
          "flex-grow": index === activeItem,
          "mobile:h-[80vh]": index === activeItem, // Active = tall
          "mobile:h-10": index !== activeItem, // Inactive = shorter
        },
        className
      )}
      style={backgroundImage}
      {...props}
    >
      <div
        className={cn(`w-full h-[80vh] bg-black ${index === activeItem ? "bg-opacity-50" : ""}`)}
      />

      {index === activeItem && (
        <Section>
          <div className="absolute bottom-0 left-0 min-w-fit text-white w-full justify-center p-5 flex flex-col">
            <div className="text-2xl font-bold md:text-4xl">{item.title}</div>
            <p className="mt-2 leading-4  text-sm md:mt-4 md:text-lg opacity-90">
              {item.description}
            </p>
          </div>

          {/* Dynamic media rendering */}
          {item.spotify?.uri ? (
            <></>
          ) : // <div className="relative w-full h-auto right-0 inset-0">
          //   <Spotify uri={item.spotify.uri} />
          // </div>
          item.video?.src ? (
            <div className="absolute right-0 bottom-0 -z-10 w-full h-full">
              <video
                src={item.video.src}
                autoPlay
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          ) : null}
        </Section>
      )}
    </div>
  );
};

const FlashUiCarousel = ({ list, autoPlay = true, className, ...props }: any) => {
  const [activeItem, setActiveItem] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      if (!isHovering) {
        setActiveItem((prev) => (prev + 1) % list.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, list.length, isHovering]);

  return (
    <>
      {/*  Desktop */}
      <div className={cn("flex mobile:grid mobile:gap-2 w-full gap-1", className)}>
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
      {/*  */}
    </>
  );
};

export default FlashUiCarousel;
