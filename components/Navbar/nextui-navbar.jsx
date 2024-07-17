"use client";
import React, {useState} from "react";
import content from "./Navbar.content.json";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import MenuItems from "../ui/menu-items";
import Brand from "../ui/brand";

const navItems = content.navItems;

const NextUiNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <Navbar
      className="w-screen bg-[#E5E5E5]"
      shouldHideOnScroll
      position={"sticky"}
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      maxWidth="full">
      <NavbarBrand className="flex">
        <Brand />
      </NavbarBrand>
    </Navbar>
  );
};
export default NextUiNav;
