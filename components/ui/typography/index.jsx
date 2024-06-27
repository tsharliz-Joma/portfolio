"use client";
import {cn, getRandomFontClass} from "@/lib/helper";
import React, {forwardRef, useEffect, useState, useMemo} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Typography = forwardRef(({className, children}, ref) => {
  const hasSpace = children.includes(" ");

  const words = useMemo(() => {
    return hasSpace ? children.split(" ") : [children];
  }, [children, hasSpace]);

  const [fontClasses, setFontClasses] = useState([]);

  // Set an initial font on first render just x1 time
  useEffect(() => {
    const initialFontClasses = words.map(() => getRandomFontClass());
    setFontClasses(initialFontClasses);
  }, [words]);

  useGSAP(() => {
    const elements = ref.current.querySelectorAll("span");
    elements.forEach((element, index) => {
      gsap.fromTo(
        element,
        {opacity: 0},
        {
          opacity: 1,
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            end: "bottom 10%",
            scrub: true,
            onEnter: () => {
              const randomFont = getRandomFontClass();
              element.style.fontClass = randomFont;
            },
            onLeaveBack: () => {
              const randomFont = getRandomFontClass();
              element.style.fontClass = randomFont;
            },
          },
        },
      );
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [ref]);
  return (
    <div ref={ref} className={cn(className)}>
      {words.map((word, index) => (
        <span key={index} style={{fontFamily: fontClasses[index]}}>
          {word}
          {index < words.length - 1 ? " " : ""}
        </span>
      ))}
    </div>
  );
});

Typography.displayName = "Typogrpahy";
export default Typography;
