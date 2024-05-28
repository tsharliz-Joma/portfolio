"use client";
import React, { forwardRef, useRef } from "react";
import Divider from "../divider";
import Typography from "../typography";

const HighlightCard = forwardRef(({ title, description, ...props }, ref) => {
  return (
    <div className="w-full sm:w-full flex flex-col gap-5">
      <Typography ref={ref} className="text-center">
        <h4 className="text-3xl tracking-[1.5px] font-bold">{title}</h4>
        <span className="text-sm tracking-[0.5px]">{description}</span>
      </Typography>
      <div className="container w-1/2 sm:w-full">
        <Divider bg={"#000"} />
      </div>
    </div>
  );
});

HighlightCard.displayName = "Highlight Card";
export default HighlightCard;
