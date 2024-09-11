"use client";
import React, { forwardRef, useRef } from "react";
import Typography from "../typography";

const HighlightCard = forwardRef(({ title, description, ...props }, ref) => {
  return (
    <div className="w-full sm:w-full grid gap-3">
      <p ref={ref} className="text-center">
        <a
          className="text-3xl tracking-[1.5px]  block pointer"
          href={`#${title}`}
        >
          {title}
        </a>
        <span className="text-sm tracking-[0.5px]">{description}</span>
      </p>
    </div>
  );
});

HighlightCard.displayName = "Highlight Card";
export default HighlightCard;
