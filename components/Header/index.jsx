import React from "react";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import content from "./Header.content.json";
import Typography from "../ui/typography";

const Header = () => {
  const headshot = content.Header.Headshot.src;
  const data = {
    sub: "Sudan Born | South Gippsland raised | Sydney Based",
  };

  return (
    <div className="text-black flex flex-col sm:flex-row justify-center items-center h-screen bg-cover bg-center bg-no-repeat bg-[url('/static/img/header.jpeg')]">
      <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center w-5/6 sm:w-3/5 sm:h-[65%] gap-10 bg-custom-transparent shadow-custom-shadow p-6 relative overflow-hidden rounded-lg">
        <div className="flex justify-center sm:w-full">
          <Image
            src={headshot}
            alt="headshot"
            height={1000}
            width={1000}
            className="w-full h-auto sm:h-auto object-cover "
          />
        </div>

        <div className="flex flex-col gap-7 sm:container sm:w-4/5">
          <p className="text-center font-bold">{data.sub}</p>
          <p className="text-4xl font-bold">
            An Junior Creative Technologist with energy and passion, and a taste for front-end development
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[rgba(255,255,255,0.1)] to-transparent pointer-events-none z-0"></div>
      </div>
    </div>
  );
};

export default Header;
