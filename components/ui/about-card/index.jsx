"use client";
import React, {forwardRef, useState, useEffect, useRef} from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import {useMediaQuery} from "react-responsive";
import {X} from "lucide-react";
import Divider from "../divider";
import Spotify from "../spotify";
import VideoPlayer from "../video-player";
import Typography from "../typography";
import {cn} from "@/lib/helper";

const AboutCard = forwardRef(({content, className, ...props}, ref) => {
  // const [open, setOpen] = useState(false);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const scrollPositionRef = useRef(null);
  const isDesktop = useMediaQuery({minWidth: "640px"});
  const [spotify, setSpotify] = useState(!!content.spotify);
  const [video, setVideo] = useState(!!content.video);
  const titleRef = useRef(null);

  useEffect(() => {
    scrollPositionRef.current = window.scrollY;
  }, []);

  return (
    <div
      ref={ref}
      style={{backgroundColor: props.bg}}
      className={cn(
        `fixed flex items-center justify-center border-black border-2 w-full min-h-full rounded-b-3xl`,
        className,
      )}>
      <Button
        className="cursor-pointer flex items-center justify-center w-fit h-fit py-10"
        onPress={onOpen}>
        <Typography
          ref={titleRef}
          className="font-bold text-5xl sm:text-[4rem] tracking-[3.5px] uppercase">
          {content.title}
        </Typography>
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        // Set the isDismissable property to false to prevent the modal from closing when clicking on the overlay.
        isDismissable={false}
        // Set the isKeyboardDismissDisabled property to true to prevent the modal from closing when pressing the Esc key.
        isKeyboardDismissDisabled={true}
        // style={{
        //   backgroundImage: isDesktop
        //     ? `url('/static/img/${props.modalBg}-desktop.svg')`
        //     : `url('/static/img/${props.modalBg}-mobile.svg')`,
        // }}
        // className={`bg-cover `}>
      >
        {(onClose) => (
          <div className="flex items-center text-black justify-center sm:container w-full sm:h-screen sm:w-3/6">
            <ModalContent className="w-full h-auto sm:rounded-md p-6 sm:flex sm:flex-col bg-opacity-20 backdrop-blur-md">
              <div className="flex flex-col gap-[10px]">
                <ModalHeader className="text-3xl font-extrabold tracking-[1px]">
                  {content.title}
                </ModalHeader>
                <Divider bg={"#000"} />
                <ModalBody className="grid gap-[10px] sm:gap-[20px]">
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
                </ModalBody>
              </div>
              <div className="relative flex justify-start w-full h-auto">
                <Button
                  onPress={onClose}
                  className="rounded focus:outline-none hover:text-white">
                  <X />
                </Button>
              </div>
            </ModalContent>
          </div>
        )}
      </Modal>
    </div>
  );
});

AboutCard.displayName = "About Card";
export default AboutCard;
