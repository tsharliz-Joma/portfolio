import React, {forwardRef} from "react";
import Image from "next/image";

const WorkExperienceCard = forwardRef(
  ({className, title, subTitle, description, date, image, ...props}, ref) => {
    return (
      <div className="">
        <div className="flex flex-col gap-[15px]">
          <p className="font-extrabold text-2xl tracking-[1px]">{title}</p>
          <Image
            src={image?.src}
            height={0}
            width={0}
            alt="Barista Image"
            className="object-cover rounded-xl"
            style={{width: "100%", height: "auto", aspectRatio: "3/2"}}
          />
        </div>
        <div className="py-5">
          <p className="text-blue-800 font-bold">{date}</p>
          <p className="text-xl font-bold tracking-[1px] ">{subTitle}</p>
        </div>
        <ul className="flex flex-col gap-[5px]">
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
