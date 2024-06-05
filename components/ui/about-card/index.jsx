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
  const [spotify, setSpotify] = useState(!!content.spotify?.uri);
  const [video, setVideo] = useState(!!content.video?.src);
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
        className="cursor-pointer bg-transparent focus:outline-none flex items-center justify-center w-fit h-fit py-10"
        onPress={onOpen}>
        <p className="font-bold text-5xl sm:text-[4rem] tracking-[3.5px] uppercase">
          {content.title}
        </p>
      </Button>

      <Modal
        placement="auto"
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
        className={`bg-cover fixed overflow-y-scroll w-full sm:min-w-[100%] min-h-[100%]`}>
        <div className="flex text-white sm:container z-[20]">
          <ModalContent className="w-full sm:rounded-md p-6 sm:flex sm:flex-col sm:items-center sm:justify-center bg-opacity-20 backdrop-blur-md">
            {(onClose) => (
              <>
                <div className="rounded-xl  flex flex-col sm:justify-start sm:w-5/6 sm:min-h-[100%] ">
                  <div className="w-full bg-custom-black-transparent shadow-custom-shadow gap-[10px] sm:flex sm:justify-center sm:items-center sm:flex-col w-full">
                    <div className="absolute sm:relative justify-start self-start sm:w-5/6 w-full">
                      <Button
                        onPress={onClose}
                        className="rounded-xl relative left-[-10px] sm:left-[-15] text-white bg-transparent items-center justify-start  data-focus-none hover:text-white focus:outline-none hover:text-white">
                        <X className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]" />
                      </Button>
                    </div>
                    <ModalHeader className="sm:text-5xl gap-[10px] flex-col justify-center items-center w-full font-bold tracking-[2px] uppercase">
                      {content.title}
                      <Divider bg={"#FFF"} className="w-5/6 sm:w-4/6" />
                    </ModalHeader>
                    <ModalBody className="w-full sm:w-4/6 flex flex-col gap-[10px] font-bold text-[13.5px] sm:text-[18px] tracking-[0.5px] sm:gap-[20px]">
                      <p className="tracking-[0.5px] w-full">
                        {content.description_intro}
                      </p>
                      <p className="tracking-[0.5px]">
                        {content.description_body}
                      </p>

                      <div className={`${spotify ? "flex" : "hidden"}`}>
                        <Spotify uri={content?.spotify?.uri} />
                      </div>
                      <div className={`${video ? "block " : "hidden"}`}>
                        <VideoPlayer
                          src={content?.video?.src}
                          width={"50%"}
                          height={200}
                        />
                      </div>

                      <p className="tracking-[0.5px] relative ">
                        {content.description_body2}
                      </p>
                    </ModalBody>
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
