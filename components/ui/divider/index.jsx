import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

const Divider = forwardRef(({ bg, className, ...props }, ref) => {
  return <div style={{ backgroundColor: bg }} className={cn(`w-full h-px`, className)}></div>;
});

Divider.displayName = "Divider";
export default Divider;
