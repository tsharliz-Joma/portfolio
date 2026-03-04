import React from "react";
import Section from "@/components/ui/section";
import { MailIcon } from "@heroicons/react/outline";
import { Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const serviceLinks = [
    {
      label: "Blog",
      href: "https://charlesville-blog-react.netlify.app/",
      external: true,
    },
    {
      label: "Rocket Power Tech 🚀",
      href: "https://rocket-power-tech.vercel.app/",
      external: true,
    },
  ];

  return (
    <Section
      id="contact"
      className="bg-white w-full mx-auto -translate-y-6 px-4 py-4 border-neutral-300/40 transition-all duration-300 ease-in-out hover:shadow-2xl hover:translate-y-1 dark:border-white/10 shadow-xl border rounded-2xl background-blur-md text-black"
    >
      <div className="container mx-auto text-black">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-lg sm:text-2xl sm:tracking-[1.5px] font-bold">Charles Joma</p>
            <p className="mt-2 text-sm text-neutral-600">Software Developer and Tech Enthusiast</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Contact</p>
            <div className="mt-3 space-y-2">
              <div className="flex items-center">
                <MailIcon className="mr-2 h-6 w-6" />
                <a className="hover:underline" href="mailto:charlesjoma@outlook.com">
                  charlesjoma@outlook.com
                </a>
              </div>
              <div className="flex items-center">
                <Linkedin className="mr-2 h-6 w-5" />
                <a
                  className="hover:underline"
                  href="https://www.linkedin.com/in/charlesjoma/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Other Services</p>
            <ul className="mt-3 space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    className="hover:underline"
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3 mt-6 border-t border-neutral-200/60">
        <p>
          All rights reserved | Rocket Power Tech | &copy; Jsphere Pty Ltd, {currentYear}
        </p>
      </div>
    </Section>
  );
};
Footer.displayName = "Footer";
export default Footer;
