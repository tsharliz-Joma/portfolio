"use client";
import React, {useEffect, useMemo, useState} from "react";
import Section from "@/components/ui/section";
import {motion} from "framer-motion";
import {Eye, Download, Mail} from "lucide-react";
import content from "./hero.json";
import InfoCard from "@/components/infoCard/InfoCard";
import {Button} from "@/components/ui/button/button";
import { cn } from "@/lib/utils";

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
    <Section id="Hero" className="w-full ">
      <div
        className={cn(
          `flex flex-col items-center justify-center`,
          `gap-8 border-2 shadow-xl rounded-2xl backdrop-blur-md border-neutral-300/400  p-10`,
        )}>
        <div className="grid grid-cols-2 mobile:grid-cols-1 gap-10 ">
          <div className="grid gap-y-5 w-full cols-span-2">
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
            <div className="grid grid-cols-3 gap-3 desktop:gap-14">
              <Button
                variant="neon"
                neonColor="neonBlue"
                className="flex gap-2"
                border={"border-slate-500"}
                path="/#projects">
                <a href="/#projects" className="flex gap-2 items-center">
                  <Eye className="w-6 h-6" />
                  Projects
                </a>
              </Button>
              <Button
                variant="neon"
                neonColor="neonLime"
                className="flex gap-2"
                copy={"My resume"}
                textColor={"text-black"}>
                <a
                  className="flex gap-2 items-center"
                  href="https://charlesj-portfolio-assets.s3.ap-southeast-2.amazonaws.com/files/Charles%2BJoma+resume.docx"
                  download>
                  <Download className="w-6 h-6" />
                  Resume
                </a>
              </Button>
              <Button
                variant="neon"
                neonColor="neonOrange"
                className="flex gap-2"
                copy={"My Email"}
                border={"border-slate-500"}>
                <a
                  className="flex gap-2 items-center"
                  href="mailto:charlesjoma@outlook.com">
                  <Mail className="w-6 h-6" />
                  Email
                </a>
              </Button>
            </div>
          </div>
          <div className="w-full">
            <InfoCard type={content.Developer.type} data={content.Developer} />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
