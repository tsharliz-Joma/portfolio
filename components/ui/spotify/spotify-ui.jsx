"use client";
import { useContext, createContext } from "react";

const SpotifyContext = createContext(null);

function useSpotify() {
  const context = useContext(SpotifyContext);

  if (!context) {
    throw new Error("useSpotify must be used within a <Spotify />");
  }

  return context;
}
