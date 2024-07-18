"use client";
import React, {
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import {cn} from "@/lib/helper";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";
import Splitting from "splitting";
import "splitting/dist/splitting.css";

gsap.registerPlugin(MotionPathPlugin);

const StreamerText = forwardRef(
  ({children, className, text, ...props}, ref) => {
    const containerRef = useRef(null); // Ref for the parent container, this should be, full width and height, and accept classname
    const textRef = useRef(null);
    const [delay, setDelay] = useState(0.1);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
      // setup Function to update delay
      const updateDelay = () => {
        if (window.innerWidth <= 768) {
          setDelay(0.77);
        } else {
          setDelay(0.77);
        }
      };
      //   Setup function to update duration
      const updateDuration = () => {
        if (window.innerWidth <= 768) {
          setDuration(17.85);
        } else {
          setDuration(20);
        }
      };

      // Set Duration
      updateDuration();
      window.addEventListener("resize", updateDelay);
      // Set initial delay
      updateDelay();
      window.addEventListener("resize", updateDelay);

      return () => {
        window.removeEventListener("resize", updateDuration);
        window.removeEventListener("resize", updateDelay);
      };
    }, []);

    useGSAP(() => {
      const container = containerRef.current;
      const text = textRef.current;

      // Ensure the path element is correctly retrieved
      const pathElement = container.querySelector("path");

      // Center the text for better alignment with the path
      gsap.set(text, {xPercent: -50, yPercent: -50});

      if (pathElement) {
        // Split the text into individual words using Splitting.js
        const results = Splitting({target: text, by: "words"});
        const words = results[0].words;

        gsap.set(words, {xPercent: -50, yPercent: -50});

        // Ensure the first word is positioned accurately
        gsap.set(words[0], {xPercent: 0, yPercent: 0});


        // Animate each word along the path
        words.forEach((word, i) => {
          gsap.to(word, {
            motionPath: {
              path: pathElement,
              align: pathElement,
              alignOrigin: [0.0, 0.0],
              autoRotate: true,
            },
            duration: duration,
            repeat: -1,
            ease: "linear",
            delay: i * delay, // Adjust the delay for a smoother transition
          });
        });

        gsap.to(text, {opacity: 1, duration: 0.5}); // Ensure the whole text container is visible

        // Maintain spaces between words
        words.forEach((word) => {
          gsap.set(word, {whiteSpace: "nowrap"});
        });
      }
    }, [textRef, containerRef, delay]);

    return (
      <div className={cn("relative w-full h-full", className)} {...props}>
        <svg
          className={cn("absolute inset-0 w-full h-full")}
          viewBox="0 0 100 100" // Use a viewBox for responsive scaling
          preserveAspectRatio="none" // Ensure the aspect ratio of the SVG matches the container
          ref={(node) => {
            containerRef.current = node;
            if (typeof ref === "function") {
              ref(node);
            } else if (ref) {
              ref.current = node;
            }
          }}>
          <path d="M 0 0 H 100 V 100 H 0 Z" fill="none" stroke="none" />
        </svg>
        <div ref={textRef} className="absolute opacity-0 whitespace-nowrap">
          {children}
        </div>
      </div>
    );
  },
);

StreamerText.displayName = "Streamer Text";
export default StreamerText;
