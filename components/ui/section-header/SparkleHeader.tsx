"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Sparkle from "../sparkles/Sparkle";
import { SparkleHeaderProps, SparkleType } from "./SectionHeader.Props";

export const SparkleHeader = ({
  text = "Enter Copy as Props",
  colors = { first: "#9E7AFF", second: "#FE8BBB" },
  children,
  className,
  sparkleCount = 20,
  ...props
}: SparkleHeaderProps) => {
  const [sparkles, setSparkles] = useState<SparkleType[]>([]);

  useEffect(() => {
    const generateStar = (): any => {
      const starX = `${Math.random() * 100}%`;
      const starY = `${Math.random() * 100}%`;
      const color = Math.random() > 0.5 ? colors.first : colors.second;
      const delay = Math.random() * 2;
      const scale = Math.random() * 1 + 0.3;
      const lifespan = Math.random() * 10 + 5;
      const id = `${starX}-${starY}-${Date.now()}`;
      return { id, x: starX, y: starY, color, delay, scale, lifespan };
    };

    const initializeStars = () => {
      const newSparkles = Array.from({ length: sparkleCount }, generateStar);
      setSparkles(newSparkles);
    };

    const updateStars = () => {
      setSparkles((currentSparkles) =>
        currentSparkles.map((star) => {
          if (star.lifespan <= 0) {
            return generateStar();
          } else {
            return { ...star, lifespan: star.lifespan - 0.1 };
          }
        })
      );
    };

    initializeStars();
    const interval = setInterval(updateStars, 100);
    return () => clearInterval(interval);
  }, [colors.first, colors.second, sparkleCount]);

  return (
    <div
      className={cn("text-6xl font-bold", className)}
      {...props}
      style={
        {
          "--sparkles-first-color": `${colors.first}`,
          "--sparkles-second-color": `${colors.second}`,
        } as any
      }
    >
      <span className="relative inline-block">
        {sparkles.map((sparkle) => (
          <Sparkle key={sparkle.id} {...sparkle} />
        ))}
        <strong>{text}</strong>
      </span>
    </div>
  );
};

export default SparkleHeader;
