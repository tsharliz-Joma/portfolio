import React from "react";
import Spotify from "../../ui/spotify";
import Data from "./About.content.json";

const Details = () => {
  const { About } = Data;

  return (
    <div className="grid grid-cols-2 gap-[20px] p-[20px]">
      {About.map((item, index) => (
        <div key={`${index}-description`} className={`${index === 2 ? "col-span-3" : ""} border-[0.5px] border-black p-10 rounded-[50px]`}>
          <p className="text-3xl font-bold tracking-wide">{item.title}</p>
          <div>{item.description1}</div>
          <div>{item.description2}</div>
          {item.spotify && <Spotify uri={item.spotify.uri} />}
        </div>
      ))}
    </div>
  );
};

export default Details;
