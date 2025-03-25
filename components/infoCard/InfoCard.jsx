import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCode, FaPlay } from "react-icons/fa";

const InfoCard = ({ type, data }) => {
  const isDeveloper = type === "developer";
  const isProject = type === "project";

  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      {/* Gradient Divider */}
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>

      {/* Header */}
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">{data.name}</p>
      </div>

      {/* Developer Code Block */}
      {isDeveloper && (
        <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
          <code className="font-mono text-xs md:text-sm lg:text-base">
            <div>
              <span className="mr-2 text-pink-500">const</span>
              <span className="mr-2 text-white">coder</span>
              <span className="mr-2 text-pink-500">=</span>
              <span className="text-gray-400">{"{"}</span>
            </div>

            {/* Developer Name */}
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
              <span className="text-gray-400">&#39;</span>
              <span className="text-amber-300">{data.name}</span>
              <span className="text-gray-400">&#39;,</span>
            </div>

            {/* Skills */}
            <div className="ml-4 lg:ml-8 mr-2">
              <span className="text-white">skills:</span>
              <span className="text-gray-400">[</span>
              {data.skills.map((skill, index) => (
                <span key={index}>
                  <span className="text-amber-300">{skill}</span>
                  {index < data.skills.length - 1 && <span className="text-gray-400">, </span>}
                </span>
              ))}
              <span className="text-gray-400">],</span>
            </div>

            {/* Boolean Attributes */}
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
              <span className="text-orange-400">{String(data.hardWorker)}</span>,
            </div>
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
              <span className="text-orange-400">{String(data.quickLearner)}</span>,
            </div>
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
              <span className="text-orange-400">{String(data.problemSolver)}</span>,
            </div>

            <div>
              <span className="text-gray-400">{`};`}</span>
            </div>
          </code>
        </div>
      )}

      {/* Project Content */}
      {isProject && (
        <div className="flex flex-col items-center justify-between w-full h-full">
          <h2 className="text-[#EFF3F4] font-semibold text-[1.525rem] leading-[110%] text-center capitalize">
            {data.name}
          </h2>

          {/* Project Image */}
          <div className="p-6">
            <Image
              src={data.image ? data.image.src : placeholder}
              alt={data.name}
              width={1080}
              height={720}
              className="w-80 h-64 transition-opacity duration-[0.7s] delay-[0.3s] rounded-lg group-hover:opacity-0"
            />
          </div>

          {/* Buttons (Demo & Code) */}
          <div className="flex items-center justify-between w-full">
            <Link
              href={data.demo}
              target="_blank"
              className="flex justify-center items-center w-10 h-10 rounded-full border-2 border-[#EFF3F4] text-[#EFF3F4] transition-all duration-300 hover:bg-[#231d4b] hover:text-violet-600 hover:border-[#0F0C41] hover:scale-110 decoration-clone cursor-pointer no-underline delay-[0.3s]"
            >
              <FaPlay />
            </Link>

            <Link
              href={data.code}
              target="_blank"
              className="flex justify-center items-center w-10 h-10 rounded-full border-2 border-[#EFF3F4] text-[#EFF3F4] transition-all duration-300 hover:bg-[#231d4b] hover:text-violet-600 hover:border-[#0F0C41] hover:scale-110 cursor-pointer no-underline delay-[0.3s]"
            >
              <FaCode />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoCard;
