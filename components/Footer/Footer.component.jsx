import React from "react";
import { MailIcon } from "@heroicons/react/outline";
import { Linkedin } from "lucide-react";
import ContactCard from "../ui/contact-card";

const Footer = () => {
  return (
    <div className="bg-transparent  mt-56 border-[0.5px] border-black shadow-footer-blur">
      <div className="container mx-auto text-white">
        <div className="flex flex-col sm:flex-row justify-between sm:justify-around gap-10">
          <div className="flex flex-col sm:flex-row sm:items-center">
            <div className="sm:w-full flex flex-col  p-3">
              <div className="flex gap-14">
                <p className="text-lg sm:text-2xl sm:tracking-[1.5px] font-bold">Charles Joma</p>
                <div className="flex items-center">
                  <MailIcon className="mr-2 h-6 w-6" />
                  <a href="mailto:charlesjoma@outlook.com">charlesjoma@outlook.com</a>
                </div>
                <div className="flex items-center">
                  <Linkedin className="mr-2 h-6 w-5" />
                  <a href="https://www.linkedin.com/in/charlesjoma/" target="_blank">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
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
