"use client";
import React, { forwardRef, useState, useEffect, useRef } from "react";
import {
  Dialog,
  Transition,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useMediaQuery } from "react-responsive";
import { X } from "lucide-react";
import Divider from "../divider";
import Spotify from "../spotify";
import VideoPlayer from "../video-player";
import Typography from "../typography";

const AboutCard = forwardRef(({ content, className, ...props }, ref) => {
  const [open, setOpen] = useState(false);
  const scrollPositionRef = useRef(null);
  const isDesktop = useMediaQuery({ minWidth: "640px" });
  const [spotify, setSpotify] = useState(!!content.spotify);
  const [video, setVideo] = useState(!!content.video);
  const titleRef = useRef(null);

  useEffect(() => {
    scrollPositionRef.current = window.scrollY;
  }, []);

  const openModal = () => {
    scrollPositionRef.current = window.scrollY;
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
    window.scrollTo(0, scrollPositionRef.current);
  };

  return (
    <div
      ref={ref}
      style={{ backgroundColor: props.bg }}
      className={`${className} fixed flex items-center justify-center border-black border-2 w-full min-h-full rounded-b-3xl`}
    >
      <div
        className="cursor-pointer flex items-center justify-center w-full"
        onClick={openModal}
      >
        <Typography
          ref={titleRef}
          className="font-bold text-[4rem] tracking-[3.5px] uppercase"
        >
          {content.title}
        </Typography>
      </div>

      <Transition show={open} appear>
        <Dialog
          open={open}
          onClose={closeModal}
          style={{
            backgroundImage: isDesktop
              ? `url('/static/img/${props.modalBg}-desktop.svg')`
              : `url('/static/img/${props.modalBg}-mobile.svg')`,
          }}
          className={`bg-cover `}
        >
          {/* <Transition.Child>
            <div className="fixed inset-0 bg-black/30" />
          </Transition.Child> */}

          <div className="flex items-center text-black justify-center sm:container w-full sm:h-screen sm:w-3/6">
            <Dialog.Panel className="w-full h-auto sm:rounded-md p-6 sm:flex sm:flex-col bg-opacity-20 backdrop-blur-md">
              <div className="flex flex-col gap-[10px]">
                <Dialog.Title className="text-3xl font-extrabold tracking-[1px]">
                  {content.title}
                </Dialog.Title>
                <Divider bg={"#000"} />
                <Dialog.Description className="grid gap-[20px]">
                  <p className="font-bold tracking-[0.5px]">
                    {content.description_intro}
                  </p>
                  <p className="font-bold tracking-[0.5px]">
                    {content.description_body}
                  </p>
                  <div className={`w-full`}>
                    <div className={`${spotify ? "block" : "hidden"}`}>
                      <Spotify uri={content?.spotify?.uri} />
                    </div>
                    <div className={`${video ? "block" : "hidden"}`}>
                      <VideoPlayer src={content?.video?.src} width={"100%"} />
                    </div>
                  </div>
                  <p className="font-bold tracking-[0.5px] relative sm:top-[-30px]">
                    {content.description_body2}
                  </p>
                </Dialog.Description>
              </div>
              <div className="relative flex justify-start w-full h-auto">
                <button className="rounded focus:outline-none hover:text-white">
                  <X onClick={closeModal} />
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
});

AboutCard.displayName = "About Card";
export default AboutCard;
