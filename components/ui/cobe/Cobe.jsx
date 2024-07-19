"use client";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/helper";
import createGlobe from "cobe";

const Cobe = ({ className, ...props }) => {
  const canvasRef = useRef();
  useEffect(() => {
    let phi = 0;
    let width = 0;
    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener("resize", onResize);
    onResize();
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 3,
      mapSamples: 16000,
      mapBrightness: 1.2,
      baseColor: [1, 1, 1],
      glowColor: [1.2, 1.2, 1.2],
      markerColor: [1, 0.843, 0],
      markers: [
        { location: [12.8628, 30.2176], size: 0.2 },
        { location: [-33.8688, 151.2093], size: 0.1 },
        { location: [-38.6545, 145.7282], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.005;
        state.width = width * 2;
        state.height = width * 2;
      },
    });
    setTimeout(() => (canvasRef.current.style.opacity = "1"));
    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return (
    <div className={cn(`relative m-auto w-full max-w-[900px] aspect-square`, className)}>
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          contain: "layout paint size",
          opacity: 0,
          transition: "opacity 1s ease",
        }}
      />
    </div>
  );
};

export { Cobe };
