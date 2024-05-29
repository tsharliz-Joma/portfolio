"use client";
import React, { forwardRef, useState, useEffect, useRef } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useMediaQuery } from "react-responsive";
import { X } from "lucide-react";
import Divider from "../divider";
import Spotify from "../spotify";
import VideoPlayer from "../video-player";
import Typography from "../typography";
import { cn } from "@/lib/helper";

const AboutCard = forwardRef(({ content, className, ...props }, ref) => {
  // const [open, setOpen] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const scrollPositionRef = useRef(null);
  const isDesktop = useMediaQuery({ minWidth: "640px" });
  const [spotify, setSpotify] = useState(!!content.spotify?.uri);
  const [video, setVideo] = useState(!!content.video?.src);
  const titleRef = useRef(null);

  useEffect(() => {
    scrollPositionRef.current = window.scrollY;
  }, []);

  return (
    <div
      ref={ref}
      style={{ backgroundColor: props.bg }}
      className={cn(
        `fixed flex items-center justify-center border-black border-2 w-full min-h-full rounded-b-3xl`,
        className
      )}
    >
      <Button
        className="cursor-pointer focus:outline-none flex items-center justify-center w-fit h-fit py-10"
        onPress={onOpen}
      >
        <p
          
          className="font-bold text-5xl sm:text-[4rem] tracking-[3.5px] uppercase"
        >
          {content.title}
        </p>
      </Button>

      <Modal
        hideCloseButton
        scrollBehavior="inside"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        // Set the isDismissable property to false to prevent the modal from closing when clicking on the overlay.
        isDismissable={true}
        // Set the isKeyboardDismissDisabled property to true to prevent the modal from closing when pressing the Esc key.
        isKeyboardDismissDisabled={true}
        style={{
          backgroundImage: isDesktop
            ? `url('/static/img/${props.modalBg}-desktop.svg')`
            : `url('/static/img/${props.modalBg}-mobile.svg')`,
        }}
        className={`bg-cover`}
      >
        <div className="flex fixed text-white sm:container w-full h-full  sm:h-screen z-[20]">
          <ModalContent className="w-full h-full  sm:rounded-md p-6 sm:flex sm:flex-col sm:items-center sm:justify-center bg-opacity-20 backdrop-blur-md">
            {(onClose) => (
              <>
                <div className="bg-custom-black-transparent shadow-custom-shadow flex flex-col sm:justify-center sm:items-center sm:w-4/6 ">
                  <div className=" sm:w-[95%] py-6  gap-[10px] ">
                    <ModalHeader className="sm:text-5xl font-bold tracking-[2px] uppercase">
                      {content.title}
                    </ModalHeader>
                    <Divider bg={"#000"} />
                    <ModalBody className="flex flex-col gap-[10px] font-bold text-[13.5px] sm:text-[18px] tracking-[0.5px] sm:gap-[20px]">
                      <p className="tracking-[0.5px]">
                        {content.description_intro}
                      </p>
                      <p className="tracking-[0.5px]">
                        {content.description_body}
                      </p>

                      <div className={`${spotify ? "flex" : "hidden"}`}>
                        <Spotify uri={content?.spotify?.uri} />
                      </div>
                      <div className={`${video ? "block " : "hidden"}`}>
                        <VideoPlayer src={content?.video?.src} width={"50%"} height={200} />
                      </div>

                      <p className="tracking-[0.5px] relative ">
                        {content.description_body2}
                      </p>
                    </ModalBody>
                  </div>
                  <div className="relative flex justify-end w-full h-auto  ">
                    <Button
                      onPress={onClose}
                      className="rounded p-0 data-focus-none hover:text-white focus:outline-none hover:text-white"
                    >
                      <X className="sm:w-[40px] sm:h-[40px]" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </ModalContent>
        </div>
      </Modal>
    </div>
  );
});

AboutCard.displayName = "About Card";
export default AboutCard;
