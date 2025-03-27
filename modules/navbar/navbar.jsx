"use client";
import React, { useState } from "react";
import Brand from "../../components/ui/brand";
import Section from "@/components/ui/section";
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

  const NavButton = ({ path, icon, copy, className, variant, neonColor }) => {
    return (
      <Button
        variant={variant}
        neonColor={neonColor}
        className={cn("flex gap-2", className)}
        onClick={() => navigateTo(path)}
      >
        {icon}
        {copy}
      </Button>
    );
  };

  return (
    <Section id="Navbar">
      {/* Nav menu */}
      <div
        className={cn(
          `m-auto w-full flex flex-col md:flex-row justify-between items-center`,
          `border shadow-xl rounded-2xl backdrop-blur-md border-neutral-300/40`,
          `p-3 z-50 translate-y-6`
        )}
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
          <NavButton
            variant="neon"
            neonColor="neonPink"
            path="/"
            icon={<Home className="h-4 w-4" />}
            copy="Home"
          />
          <NavButton
            variant="neon"
            neonColor="neonPurple"
            path="/#projects"
            icon={<Presentation className="h-4 w-4" />}
            copy="Projects"
          />
          <NavButton
            variant="neon"
            neonColor="neonBlue"
            path="/#work"
            icon={<Briefcase className="h-4 w-4" />}
            copy="Work"
          />
          <NavButton
            variant="neon"
            neonColor="neonCyan"
            path="/#contact"
            icon={<Mail className="h-4 w-4" />}
            copy="Contact"
          />
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
    </Section>
  );
};
export default Navbar;
