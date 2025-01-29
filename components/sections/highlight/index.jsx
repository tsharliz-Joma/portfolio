"use client";
import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import resume from "./HighlightStrip.content.json";
import GoogleMapComponent from "@/components/ui/google-maps/GoogleMap.component";
import { MdSimCardDownload } from "react-icons/md";

const HighlightSection = ({ ...props }) => {
  return (
    <Section
      id="Highlights Section"
      className={`container border-[0.5px] border-black rounded-[50px] max-w-6xl mx-auto shadow-custom-blur`}
    >
      <Box className="grid grid-cols-2 grid-flow-row gap-24 p-16 relative">
        <Box>
          <Box className="px-10 py-4 flex justify-between">
            <SectionHeader className={`uppercase`}>Resume</SectionHeader>
            <a
              href="https://charlesj-portfolio-assets.s3.ap-southeast-2.amazonaws.com/files/Charles%2BJoma+resume.docx"
              download
            >
              <MdSimCardDownload className="h-10 w-10" />
            </a>
          </Box>
          <Box className=" w-full h-96 rounded-[50px] overflow-hidden">
            <Image
              width={0}
              height={0}
              src={resume.resume.url}
              alt="resume image"
              className="w-full h-full object-cover"
            />
          </Box>
        </Box>
        <Box className="absolute inset-y-6 left-1/2 transform -translate-x-1/2 w-[1px] bg-black"></Box>
        <Box>
          <Box className="px-10 py-4">
            <SectionHeader className={`uppercase`}>Based</SectionHeader>
          </Box>
          <GoogleMapComponent className="w-full h-96 rounded-[50px] overflow-hidden" />
        </Box>
      </Box>
    </Section>
  );
};

HighlightSection.displayName = "Highlight Section";
export default HighlightSection;
