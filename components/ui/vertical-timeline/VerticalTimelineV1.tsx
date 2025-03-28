import React from "react";
import Image from "next/image";

interface ImgProps {
  src: string;
  alt: string;
}
interface TimelineItemProps {
  date: string;
  label: string;
  title: string;
  description: string;
  image: ImgProps;
}

const VerticalTimelineV1 = ({ items }: { items: TimelineItemProps[] }) => {
  return (
    <section id="VerticalTimelineV1" className="p-8">
      {items.map((item, index) => (
        <div key={index} className="relative pl-8 tablet:pl-32 group mb-10">
          {/* Time + Title */}
          <div className="flex flex-col tablet:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 tablet:before:left-0 before:h-full before:px-px before:bg-slate-300 tablet:before:ml-[7.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 tablet:after:ml-[7rem] after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full tablet:after:ml-[7rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="tablet:absolute left-0 translate-y-0.5 flex items-center justify-center text-xs font-semibold w-[100px] h-6 mb-3 tablet:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
              {item.date}
            </time>
            <div className="text-xl relative left-5 font-bold text-gray-800 dark:text-white">
              {item.title}
            </div>
          </div>
          {/* Description */}
          <div className="text-slate-500 relative left-5 pb-4 w-1/2 tablet:w-1/2">
            {item.description}
          </div>
          <div className="relative left-5 w-1/2 tablet:w-1/2">
            <Image
              width={0}
              height={0}
              style={{ height: "auto", width: "100%" }}
              alt={`${item.image.alt} Image`}
              src={item.image.src}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      ))}
    </section>
  );
};

VerticalTimelineV1.displayName = "Vertical Timeline 1 - Journey Timeline";
export { VerticalTimelineV1 };