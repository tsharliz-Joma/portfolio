"use client";
import React from "react";

const VideoPlayer = ({ src, width, height }) => {
  return (
    <video
      src={src}
      width={width}
      height={height}
      autoPlay
      loop
      muted
      style={{ objectFit: 'cover' }} // Ensures the video covers the given area
    />
  );
};

export default VideoPlayer;

