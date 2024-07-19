"use client";
import React, { useState } from "react";
import content from "./Navbar.content.json";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import MenuItems from "../ui/menu-items";
import Brand from "../ui/brand";

const navItems = content.navItems;

const NextUiNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="h-0">
      <div className="absolute right-6 top-5 sm:right-10 sm:top-9">
        <Brand />
      </div>
    </div>
  );
};
export default NextUiNav;
