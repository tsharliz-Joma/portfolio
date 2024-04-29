"use client";
import React from "react";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import content from "./Header.content.json";

const Header = () => {
  const headshot = content.Header.Headshot.src;
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center h-screen bg-cover bg-center bg-no-repeat bg-[url('/static/img/header.jpeg')]">
      <div className="container flex flex-col gap-y-9">
        <div className="">
          <Image
            src={headshot}
            alt="headshot"
            height={1000}
            width={1000}
            className="w-full h-auto object-cover "
          />
        </div>

        <div className="flex flex-col gap-7">
          <p className="text-black text-center">
            Sudan Born | South Gippsland raised | Sydney Based{" "}
          </p>{" "}
          <p className="text-black text-4xl font-bold">
            A JUNIOR DEVELOPER SHOWCASING MY CODING JOURNEY AND SKILLS.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Header;
