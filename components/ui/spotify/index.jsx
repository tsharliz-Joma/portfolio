"use client";
import React, { useEffect } from "react";
import Script from "next/script";

const Spotify = ({ uri }) => {
  useEffect(() => {
    window.onSpotifyIframeApiReady = (IFrameAPI) => {
      const element = document.getElementById("spotify-embed");
      const options = {
        width: "100%",
        height: "200px",
        uri: uri,
      };
      const callback = (EmbedController) => {};
      IFrameAPI.createController(element, options, callback);
    };
  }, [uri]);

  return (
    <div className="">
      <Script
        src="https://open.spotify.com/embed/iframe-api/v1"
        strategy="afterInteractive"
        async
      />
      <div id="spotify-embed"></div>
    </div>
  );
};

export default Spotify;
