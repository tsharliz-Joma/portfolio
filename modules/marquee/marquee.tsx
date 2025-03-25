import React from "react";
import { MarqueeProps } from "./marqueeProps";
import { cn } from "@/lib/utils";

const Marquee = ({
  className,
  reverse,
  pauseOnHover = false,
  vertical = false,
  repeat = 4,
  children,
  ...props
}: MarqueeProps) => {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden min-w-[260px] p-2 rotate-[12deg] [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)] w-full ", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
};


export default Marquee;