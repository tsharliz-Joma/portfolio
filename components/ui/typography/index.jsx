import {cn, getRandomFontClass, fonts} from "@/lib/helper";
import React, {forwardRef} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Typography = forwardRef(({className, children, ...props}, ref) => {
  const hasSpace = children.includes(" ");
  const words = hasSpace ? children.split(" ") : [children];
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
              const randomFont =
                fonts[Math.floor(Math.random() * fonts.length)];
              element.className = randomFont;
            },
            onLeaveBack: () => {
              const randomFont =
                fonts[Math.floor(Math.random() * fonts.length)];
              element.className = randomFont;
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
        <span key={index} style={{fontFamily: `${getRandomFontClass()}`}}>
          {word}
          {index < words.length - 1 ? " " : ""}
        </span>
      ))}
    </div>
  );
});

Typography.displayName = "Typogrpahy";
export default Typography;
