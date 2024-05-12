"use client"
import React, { useEffect, useContext, createContext } from "react";
import Script from "next/script";

const SpotifyContext = createContext(null);

function useSpotify() {
  const context = useContext(SpotifyContext);

  if (!context) {
    throw new Error("useSpotify must be used within a <Spotify />");
  }

  return context;
}


