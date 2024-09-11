"use client";
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

const Section = forwardRef(({ id, className, children, ...props }, ref) => {
  return (
    <section ref={ref} id={id} className={cn("", className)}>
      {children}
    </section>
  );
});
Section.displayName = "Section";
export default Section;
