import React from "react";
import Image from "next/image";
import content from "./Header.content.json";
import StreamerText from "../ui/streamer-text";
import { DragAutoCobe } from "../ui/cobe";

const Header = () => {
  const headshot = content.Header.Headshot.src;

  const data = {
    head: "A Junior Web developer with energy, passion, and a love for the front-end | Sudan Born | South Gippsland raised | Sydney Based",
    sub: "",
  };

  return (
    <div className="text-black flex flex-col sm:flex-row justify-center items-center h-screen w-full bg-cover bg-center bg-no-repeat bg-black">
      <StreamerText className="w-full h-full overflow-hidden">
        <span className="text-md sm:text-xl font-bold text-white uppercase" text={data.head}>
          {data.head}
        </span>
      </StreamerText>

      <div className="absolute w-full flex sm:flex-row sm:justify-center sm:items-center ">
        <DragAutoCobe />
      </div>
    </div>
  );
};

export default Header;
