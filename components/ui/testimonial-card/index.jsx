"use client";
import React, { forwardRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const TestimonialCard = forwardRef(({ className, title, description, author, desktopImg, mobileImg, ...props }, ref) => {
  return (
    <div key={`${title}-index`} className={cn("flex h-full justify-center items-center gap-[50px] font-bold", className)} ref={ref}>
      <div className="bg-[#FFF] mx-auto flex flex-col sm:gap-[30px] sm:w-4/6 rounded-xl p-5 text-xl text-black tracking-[2px] ">
        <div className="">
          <p className="text-base sm:text-xl sm:tracking-[0.75px]">{title}</p>
        </div>
        <div className="mb-2">
          <p className="text-xl sm:text-2xl sm:font-bold tracking-[0.5px] sm:tracking-[1px]">{description}</p>
        </div>
        <div>
          <p className="text-base">{author}</p>
        </div>
      </div>
    </div>
  );
});

TestimonialCard.displayName = "TestimonialCard";
export default TestimonialCard;
