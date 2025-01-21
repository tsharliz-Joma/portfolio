import React from "react";
import Spotify from "../../ui/spotify";
import Data from "./About.content.json";

const Details = ({ About, index }) => {
  // const { About } = Data;

  return (
    <div
      key={`${About}-description`}
      className={`${
        index === 2 ? "col-span-3" : "col-span-1 mobile:col-span-2"
      }  border-[0.5px] p-10 grid border-black rounded-[50px]`}
    >
      <p className="text-3xl font-bold tracking-wide">{About.title}</p>
      <div>{About.description1}</div>
      <div>{About.description2}</div>
      <div >{About.spotify && <Spotify uri={About.spotify.uri} />}</div>
    </div>
  );
};

export default Details;
