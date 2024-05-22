import React from "react";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import content from "./Header.content.json";

const Header = () => {
  const headshot = content.Header.Headshot.src;
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center h-screen bg-cover bg-center bg-no-repeat bg-[url('/static/img/header.jpeg')]">
      <div className="flex flex-col sm:justify-center sm:items-center w-4/6 gap-10 bg-black bg-opacity-75 p-5 relative overflow-hidden rounded-lg">
        <div className="flex justify-center">
          <Image
            src={headshot}
            alt="headshot"
            height={1000}
            width={1000}
            className="w-full h-auto sm:w-1/2 sm:h-auto object-cover "
          />
        </div>

        <div className="flex flex-col gap-7 sm:container sm:w-4/5">
          <p className="text-white text-center font-bold">
            Sudan Born | South Gippsland raised | Sydney Based{" "}
          </p>{" "}
          <p className="text-white text-4xl font-bold">
            An Junior Creative Technologist with energy and passion, spreading
            Peace , Love and Soul
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[rgba(255,255,255,0.1)] to-transparent pointer-events-none z-0"></div>
      </div>
    </div>
  );
};

export default Header;
