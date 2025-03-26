"use client";
import React, { useState } from "react";
import Brand from "../../components/ui/brand";
import { Button } from "@/components/ui/button/button";
import { cn } from "@/lib/utils";
import { Home, Briefcase, Mail, Presentation, Menu, X } from "lucide-react";

import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const navigateTo = (path) => {
    setMenuOpen(!menuOpen);
    router.push(path);
  };

  const NavButton = ({ path, icon, copy, className }) => {
    return (
      <Button className={cn("flex gap-2", className)} onClick={() => navigateTo(path)}>
        {icon}
        {copy}
      </Button>
    );
  };

  return (
    <div className="flex justify-between items-center h-auto">
      {/* Nav menu */}
      <div
        className={`bg-card text-card-foreground p-3 m-auto w-full shadow-md md:rounded-lg flex flex-col md:flex-row justify-between items-center z-50`}
      >
        <div className="flex justify-between items-center w-full md:w-auto">
          <Brand onClick={() => navigateTo("/")} />
          <button
            className="md:hidden text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-6 w-6 text-black" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-5 items-center">
          <NavButton path="/" icon={<Home className="h-4 w-4" />} copy="Home" />
          <NavButton
            path="/#projects"
            icon={<Presentation className="h-4 w-4" />}
            copy="Projects"
          />
          <NavButton path="/#work" icon={<Briefcase className="h-4 w-4" />} copy="Work" />
          <NavButton path="/#contact" icon={<Mail className="h-4 w-4" />} copy="Contact" />
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col gap-3  mt-4">
            <NavButton path="/" icon={<Home className="h-4 w-4" />} copy="Home" />
            <NavButton
              path="/#projects"
              icon={<Presentation className="h-4 w-4" />}
              copy="Projects"
            />
            <NavButton path="/#work" icon={<Briefcase className="h-4 w-4" />} copy="Work" />
            <NavButton path="/#contact" icon={<Mail className="h-4 w-4" />} copy="Contact" />
          </div>
        )}

        {/* <ModeToggle /> */}
      </div>
    </div>
  );
};
export default Navbar;
