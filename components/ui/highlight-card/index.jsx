"use client";
import React, { forwardRef, useRef } from "react";
import Typography from "../typography";

const HighlightCard = forwardRef(({ title, description, ...props }, ref) => {
  return (
    <div className="w-full sm:w-full flex flex-col gap-5">
      <Typography ref={ref} className="text-center">
        <a className="text-3xl tracking-[1.5px] font-bold block pointer" href={`#${title}`}>
          {title}
        </a>
        <span className="text-sm tracking-[0.5px]">{description}</span>
      </Typography>
    </div>
  );
});

HighlightCard.displayName = "Highlight Card";
export default HighlightCard;
