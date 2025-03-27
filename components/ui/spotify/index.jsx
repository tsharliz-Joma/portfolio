"use client";
import React, { useEffect, useId } from "react";
import Script from "next/script";

const Spotify = ({ uri }) => {
  const embedId = useId();

  useEffect(() => {
    window.onSpotifyIframeApiReady = (IFrameAPI) => {
      const element = document.getElementById(embedId);
      const options = {
        width: "100%",
        height: "200px",
        uri: uri,
      };
      IFrameAPI.createController(element, options, () => {});
    };
  }, [uri, embedId]);

  return (
    <div className="">
      <Script
        src="https://open.spotify.com/embed/iframe-api/v1"
        strategy="afterInteractive"
        async
      />
      <div id={embedId}></div>
    </div>
  );
};

export default Spotify;
