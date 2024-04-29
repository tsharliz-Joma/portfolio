import React from "react";
import Image from "next/image";

const TechCard = ({content}) => {
  return (
    <div className="w-full flex items-center justify-center md:w-1/4 p-4">
      <div className="text-center">
        <Image src={content.src} width={150} height={150} alt={content.alt} />
      </div>
    </div>
  );
};

TechCard.displayName = "Tech Display Card";
export default TechCard;
