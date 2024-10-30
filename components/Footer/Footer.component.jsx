import React from "react";
import { MailIcon } from "@heroicons/react/outline";
import { Linkedin } from "lucide-react";
import ContactCard from "../ui/contact-card";

const Footer = () => {
  return (
    <div className="bg-transparent pt-10 ">
      <div className="container mx-auto text-white">
        <div className="flex flex-col sm:flex-row justify-between sm:justify-around gap-10">
          <div className="flex flex-col sm:flex-row sm:items-center">
            <div className="sm:w-full flex flex-col gap-10 p-5">
              <div className="flex flex-col gap-5">
                <p className="text-lg sm:text-2xl sm:tracking-[1.5px] font-bold">Charles Joma</p>
                <div className="flex items-center mb-2">
                  <MailIcon className="mr-2 h-6 w-6" />
                  <p className="text-xl tracking-[0.5px]">
                    <a href="mailto:charlesjoma@yahoo.com">tsharlizjoma@yahoo.com</a>
                  </p>
                </div>
                <div className="flex items-center">
                  <Linkedin className="mr-2 h-6 w-6" /> {/* Replace this with LinkedInIcon if available */}
                  <p className="text-xl tracking-[0.5px]">
                    <a href="https://www.linkedin.com/in/charlesjoma/" target="_blank">
                      LinkedIn
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-2/6 pb-10">
            <ContactCard />
          </div>
        </div>
      </div>
      <div className="text-center p-3">
        <p>All right reserved | &copy; Jsphere Pty Ltd, 2024 | 🚀 Power Tech</p>
      </div>
    </div>
  );
};
Footer.displayName = "Footer";
export default Footer;
