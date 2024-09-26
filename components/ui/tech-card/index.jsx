import React from "react";
import Image from "next/image";

const TechCard = ({content}) => {
  return (
    <div className="w-full flex items-center justify-center p-4">
      <Image src={content.src} width={100} height={100} alt={content.alt} />
    </div>
  );
};

TechCard.displayName = "Tech Display Card";
export default TechCard;
