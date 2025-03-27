import React from "react";
import Section from "@/components/ui/section";
import { MailIcon } from "@heroicons/react/outline";
import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <Section
      id="contact"
      className="bg-white w-full mx-auto -translate-y-6 px-4 py-4 border-neutral-300/40 transition-all duration-300 ease-in-out hover:shadow-2xl hover:translate-y-1 dark:border-white/10 shadow-xl border rounded-2xl background-blur-md text-black"
    >
      <div className="container mx-auto text-black">
        <div className="flex flex-col sm:flex-row justify-between sm:justify-around gap-10">
          <div className="flex flex-col sm:flex-row sm:items-center">
            <div className="sm:w-full flex flex-col ">
              <div className="grid grid-cols-3 mobile:grid-cols-1 mobile:gap-y-2 gap-14">
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
        <p>All right reserved | Rocker Power Tech 🚀 | &copy; Jsphere Pty Ltd, 2024 </p>
      </div>
    </Section>
  );
};
Footer.displayName = "Footer";
export default Footer;
