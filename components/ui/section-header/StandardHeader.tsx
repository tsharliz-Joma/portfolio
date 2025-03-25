
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { SectionHeaderProps } from "./SectionHeader.Props";

const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className={cn("text-4xl tracking-[2.5px] text-black font-extrabold", className)}>
        {children}
      </div>
    );
  }
);

SectionHeader.displayName = "Section Header";
export default SectionHeader;
