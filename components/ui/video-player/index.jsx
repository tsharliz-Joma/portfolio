"use client";
import React from "react";

const VideoPlayer = ({ src, width, height }) => {
  return (
    <video
      className="rounded-xl p-0 m-0 border-box "
      src={src}
      width={width}
      height={height}
      autoPlay
      loop
      muted
      preload="auto"
      style={{ objectFit: "cover" }} // Ensures the video covers the given area
    />
  );
};

export default VideoPlayer;
