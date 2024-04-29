import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ContactCard from "../ui/contact-card";

const Footer = () => {
  return (
    <div className="bg-black pt-6">
      <div className="container text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="md:w-1/2 flex flex-col gap-4">
              <div className="">
                <p className="text-lg font-bold">Charles Joma</p>
              </div>
              <div className="">
                <div className="flex items-center mb-2">
                  <EmailIcon className="mr-2" />
                  <p>tsharlizjoma@yahoo.com</p>
                </div>
                <div className="flex items-center">
                  <LinkedInIcon className="mr-2" />
                  <p>LinkedIn</p>
                </div>
              </div>
              <div className="md:hidden w-full text-center">
                <div className="flex justify-around flex-wrap">
                  <p className="">Home</p>
                  <p className="">About</p>
                  <p className="">Projects</p>
                  <p>Work Experience</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex flex-wrap">
                <p className="mr-4">Home</p>
                <p className="mr-4">About</p>
                <p className="mr-4">Projects</p>
                <p>Work Experience</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 pb-10 pt-5">
            <ContactCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
