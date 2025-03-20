"use client";
import React, {useEffect, useMemo, useState} from "react";
import {motion} from "framer-motion";
import {Eye, Download, Mail} from "lucide-react";
import content from "./hero.json";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button/button";
import StreamerText from "../../components/ui/streamer-text";
import {DragAutoCobe} from "../../components/ui/cobe";

const Hero = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => content.titles, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="">
        <div className="flex flex-col items-center justify-center gap-8 py-20 lg:py-40">
          <div className="grid grid-cols-2">
            <div className="grid gap-y-10 w-full cols-span-2">
              <h1 className="text-4xl  desktop:text-5xl tracking-tighter text-left max-w-3xl">
                <span className="text-spektr-cyan-50">Hi, I am</span>
                <span className="w-full flex relative text-left justify-start overflow-hidden md:pb-4 md:pt-1">
                  &nbsp;
                  {titles.map((title, index) => (
                    <motion.span
                      key={index}
                      className="absolute font-semibold"
                      initial={{opacity: 0, y: -100}}
                      transition={{type: "spring", stiffness: 50}}
                      animate={
                        titleNumber === index
                          ? {y: 0, opacity: 1}
                          : {y: titleNumber > index ? -150 : 150, opacity: 0}
                      }>
                      {title}
                    </motion.span>
                  ))}
                </span>
              </h1>
              <p className="text-lg desktop:text-1xl leading-6 tracking-tight text-left max-w-3xl">
                {content.profile}
              </p>
              <div className="flex flex-row gap-3 desktop:gap-14">
                <Button
                  className={cn(
                    "hover:bg-secondary gap-2 w-full flex items-center text-sm px-6 border-[1px] border-slate-500 rounded-md font-semibold py-3",
                  )}>
                  Work <Eye className="w-4 h-4" />
                </Button>
                <Button className="gap-2 w-full flex items-center text-sm bg-gray-900 text-white px-6 rounded-md font-semibold py-3 ">
                  Resume <Download className="w-4 h-4" />
                </Button>
                <Button className="gap-2 w-full flex items-center text-sm px-6 border-[1px] border-slate-500 rounded-md font-semibold py-3">
                  Contact <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
            {/* <div>Hey</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
