import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

const Hamburger = forwardRef(({ className, isOpen, color, toggleMenu, ...props }, ref) => {
  return (
    <div className={cn(`relative w-full h-full cursor:pointer`)} onClick={toggleMenu}>
      <span className={cn(`absolute block w-full h-0.5 my-1 transition-transform duration-500 ease-in-out ${isOpen ? "rotate-45 top-1.5" : "top-0"}`, className)}></span>
      <span className={cn(`absolute block w-full h-0.5  my-1 transition-transform duration-500 ease-in-out ${isOpen ? "-rotate-45 top-1.5" : "bottom-0"} `, className)}></span>
    </div>
  );
});
Hamburger.displayName = "Hamburger";
export default Hamburger;
