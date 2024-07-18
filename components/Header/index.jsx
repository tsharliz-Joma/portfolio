import React from "react";
import Image from "next/image";
import content from "./Header.content.json";
import StreamerText from "../ui/streamer-text";

const Header = () => {
  const headshot = content.Header.Headshot.src;

  const data = {
    head: "A Junior Web developer with energy, passion, and a love for the front-end | Sudan Born | South Gippsland raised | Sydney Based",
    sub: "",
  };

  return (
    <div className="text-black flex flex-col sm:flex-row justify-center items-center h-screen w-full bg-cover bg-center bg-no-repeat bg-[url('/static/img/header.jpeg')]">
      <StreamerText className="w-full h-full overflow-hidden">
        <span className="text-xl font-bold" text={data.head}>{data.head}</span>
      </StreamerText>

      <div className="absolute flex flex-col sm:flex-row sm:justify-center sm:items-center ">
        <div className="flex justify-center sm:w-1/2">
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
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[rgba(255,255,255,0.1)] to-transparent pointer-events-none z-0"></div>
      </div>
    </div>
  );
};

export default Header;
