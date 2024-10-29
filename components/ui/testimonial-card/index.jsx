"use client";
import React, { forwardRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const TestimonialCard = forwardRef(
  (
    { className, title, description, author, desktopImg, mobileImg, ...props },
    ref
  ) => {
    return (
      <div
        key={`${title}-index`}
        className={cn("flex h-full justify-center items-center p-6", className)}
        ref={ref}
      >
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-md mx-auto">
          <div className="p-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">
              {title}
            </h3>
            <p className="text-gray-700 text-base sm:text-lg mb-4">
              {description}
            </p>
            <p className="text-gray-500 text-sm sm:text-base">{author}</p>
          </div>
        </div>
      </div>
    );
  }
);

TestimonialCard.displayName = "TestimonialCard";
export default TestimonialCard;
