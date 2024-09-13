"use client";
import React, { forwardRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollToPlugin);

const MenuItems = forwardRef(({ className, item, label, onClick, ...props }, ref) => {
  const handleClick = (ev) => {
    ev.preventDefault();
    const targetId = ev.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const yPosition = targetElement.getBoundingClientRect().y + targetElement.getBoundingClientRect().height;

      const currentScrollPosition = window.scrollY;
      const tolerance = 5;

      if (Math.abs(currentScrollPosition - yPosition) > tolerance) {
        gsap.to(window, {
          scrollTo: { y: yPosition, offsetY: 0 },
          duration: 1,
          ease: "power2.inOut",
        });
      }

      if (onClick) {
        onClick(ev);
      }
    }
  };

  return (
    <a
      href={`#${label}`}
      onClick={handleClick}
      {...props}
      className={cn(`rounded-md text-black hover:text-white tracking-[1px] text-xl font-extrabold py-2 px-4 inline-block transition-colors duration-200 hover:bg-gray-700`, className)}
    >
      {label}
    </a>
  );
});

MenuItems.displayName = "Menu Items";
export default MenuItems;
