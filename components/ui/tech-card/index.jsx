import React from "react";
import Image from "next/image";

const TechCard = ({ content }) => {
  return (
    <div className="place-self-center w-full flex items-center justify-center sm:w-full p-4">
      <Image src={content.src} width={150} height={150} alt={content.alt} />
    </div>
  );
};

TechCard.displayName = "Tech Display Card";
export default TechCard;
