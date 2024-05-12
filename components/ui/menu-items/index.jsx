"use client";
import * as React from "react";
import Link from "next/link";

const MenuItems = React.forwardRef(({className, item, ...props}, ref) => {
  return (
    <Link
      href={`/${item.label}`}
      className={`text-black tracking-[1.5px] text-xl font-extrabold py-2 px-4 inline-block transition-colors duration-200 hover:bg-gray-700`}>
      {item.label}
    </Link>
  );
});

MenuItems.displayName = "Menu Items";
export default MenuItems;
