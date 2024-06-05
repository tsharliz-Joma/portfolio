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

const navItems = content.navItems;

const NextUiNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar
      shouldHideOnScroll
      position={"sticky"}
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}>
      <NavbarContent className="">
        <NavbarMenuToggle
          isSelected={isMenuOpen}
          //   icon={<Hamburger isOpen={isMenuOpen} className="bg-black" />}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onChange={(isOpen) => setIsMenuOpen(isOpen)}
          className="sm:hidden w-10 h-10 text-black"
        />
        <NavbarBrand className="w-full ">
          <p className="text-3xl tracking-[1.5px] text-black  uppercase">
            Welcome
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="between">
        <NavbarItem>
          {navItems.map((item, index) => (
            <MenuItems {...item} key={index} className="text-white" />
          ))}
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-custom-black-transparent">
        {navItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <MenuItems {...item} key={index} className="w-full" size="lg" />
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
export default NextUiNav;
