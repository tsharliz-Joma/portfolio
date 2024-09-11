import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

const SectionHeader = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div className={cn("text-4xl tracking-[2.5px] font-extrabold", className)}>
      {children}
    </div>
  );
});
SectionHeader.displayName = "Section Header";
export default SectionHeader;
