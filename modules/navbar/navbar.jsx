"use client";
import React from "react";
import Brand from "../../components/ui/brand";
import {Button} from "@/components/ui/button/button";
import {cn} from "@/lib/utils";
import {Home, Briefcase, Mail, Presentation, Menu, X} from "lucide-react";

import {useRouter} from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const navigateTo = (path) => {
    router.push(path);
  };

  const NavButton = ({path, icon, copy, className}) => {
    return (
      <Button
        className={cn("", className)}
        onClick={() => navigateTo(path)}>
        {icon}
        {copy}
      </Button>
    );
  };

  return (
    <div className="flex justify-between items-center h-auto">
      <div className="">
        <Brand onClick={() => navigateTo("/")} />
      </div>

      {/* Nav menu */}
      <div
        className={`bg-card text-card-foreground p-3 shadow-sm md:rounded-lg flex flex-col md:flex-row justify-between items-center z-50`}>
        <div className="w-full md:w-auto flex gap-5 justify-between items-center">
          <NavButton path="/" icon={<Home className="h-4 w-4" />} copy="Home" />
          <NavButton
            path="/#projects"
            icon={<Presentation className="h-4 w-4" />}
            copy="Projects"
          />
          <NavButton
            path="/#work"
            icon={<Briefcase className="h-4 w-4" />}
            copy="Work"
          />
          <NavButton
            path="/#contact"
            icon={<Mail className="h-4 w-4" />}
            copy="Contact"
          />
        </div>

        {/* <ModeToggle /> */}
      </div>
    </div>
  );
};
export default Navbar;
