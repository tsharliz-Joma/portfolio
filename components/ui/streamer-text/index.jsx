"use client";
import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import "splitting/dist/splitting.css";

gsap.registerPlugin(MotionPathPlugin);

const StreamerText = forwardRef(({ children, className, text, ...props }, ref) => {
  const containerRef = useRef(null); // Ref for the parent container, this should be, full width and height, and accept classname
  const textRef = useRef(null);
  const [delay, setDelay] = useState(0.1);
  const [duration, setDuration] = useState(0);
  const [pathData, setPathData] = useState("M 0 0 H 100 V 100 H 0 Z");
  const animationRef = useRef([]);
  const [windowWidth, setWindowWidth] = useState(null);
  const [windowHeight, setWindowHeight] = useState(null);

  useImperativeHandle(ref, () => containerRef.current);

  const updatePathData = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const newPathData = `M 0 0 H ${width} V ${height} H 0 Z`;
    setPathData(newPathData);

    if (animationRef.current.length > 0) {
      animationRef.current.forEach((anim) => {
        anim.vars.motionPath.path = newPathData;
        anim.invalidate().restart();
      });
    }
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
    const updateDelay = () => {
      if (window.innerWidth <= 768) {
        setDelay(0.77);
      } else {
        setDelay(0.77);
      }
    };

    const updateDuration = () => {
      if (window.innerWidth <= 768) {
        setDuration(17.85);
      } else {
        setDuration(20);
      }
    };

    updateDuration();
    updateDelay();
    updatePathData();

    window.addEventListener("resize", updateDelay);
    window.addEventListener("resize", updateDuration);
    window.addEventListener("resize", updatePathData);

    return () => {
      window.removeEventListener("resize", updateDuration);
      window.removeEventListener("resize", updateDelay);
      window.removeEventListener("resize", updatePathData);
    };
  }, []);

  useGSAP(() => {
    const container = containerRef.current;
    const text = textRef.current;

    // Ensure the path element is correctly retrieved
    const pathElement = container.querySelector("path");

    // Center the text for better alignment with the path
    gsap.set(text, { xPercent: -50, yPercent: -50 });

    if (pathElement) {
      // Split the text into individual words using Splitting.js
      import("splitting").then((Splitting) => {
        const results = Splitting.default({ target: text, by: "words" });
        const words = results[0].words;

        gsap.set(words, { xPercent: -50, yPercent: -50 });

        // Ensure the first word is positioned accurately
        gsap.set(words[0], { xPercent: 0, yPercent: 0 });

        // Animate each word along the path
        const animations = words.map((word, i) => {
          return gsap.to(word, {
            motionPath: {
              path: pathElement,
              align: pathElement,
              alignOrigin: [0.0, 0.0],
              autoRotate: true,
            },
            duration: duration,
            repeat: -1,
            ease: "linear",
            delay: i * delay,
          });
        });

        animationRef.current = animations;

        gsap.to(text, { opacity: 1, duration: 0.5 });

        words.forEach((word) => {
          gsap.set(word, { whiteSpace: "nowrap" });
        });
      });
    }
  }, [textRef, containerRef, delay, duration]);

  return (
    <div className={cn("relative w-full h-full", className)} {...props}>
      <svg
        className={cn("absolute inset-0 w-full h-full")}
        viewBox={`0 0 ${windowWidth} ${windowHeight}`} // Use a viewBox for responsive scaling
        preserveAspectRatio="none" // Ensure the aspect ratio of the SVG matches the container
        ref={containerRef}
      >
        <path d={pathData} fill="none" stroke="none" />
      </svg>
      <div ref={textRef} className="absolute opacity-0 whitespace-nowrap">
        {children}
      </div>
    </div>
  );
});

StreamerText.displayName = "Streamer Text";
export default StreamerText;
