import React, {forwardRef} from "react";
import Image from "next/image";

const WorkExperienceCard = forwardRef(
  ({className, title, subTitle, description, date, image, ...props}, ref) => {
    return (
      <div className="py-5">
        <div>
          <p className="font-bold text-xl tracking-[1.5px]">{title}</p>
          <Image
            src={image?.src}
            height={0}
            width={0}
            alt="Barista Image"
            className="object-cover"
            style={{width: "100%", height: "auto", aspectRatio: "3/2"}}
          />
        </div>
        <div className="py-5">
          <p className="text-blue-800 font-bold">{date}</p>
          <p className="text-xl font-bold tracking-[1px] ">{subTitle}</p>
        </div>
        <ul className="flex flex-col gap-[10px]">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  },
);
WorkExperienceCard.displayName = "Work Experience Card";
export default WorkExperienceCard;
