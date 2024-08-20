"use client";
import React, { forwardRef, useState, useEffect, useRef, useCallback, lazy, Suspense } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure } from "@nextui-org/react";
import { useMediaQuery } from "react-responsive";
import { X } from "lucide-react";
import Divider from "../divider";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import Loading from "./loading";

const LazySpotify = lazy(() => import("../spotify"));
const LazyVideoPlayer = lazy(() => import("../video-player"));

const AboutCard = forwardRef(({ content, className, direction, cta, ...props }, ref) => {
  // const [open, setOpen] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const scrollPositionRef = useRef(null);
  const isDesktop = useMediaQuery({ minWidth: "640px" });
  const [spotify, setSpotify] = useState(!!content.spotify?.uri);
  const [video, setVideo] = useState(!!content.video?.src);
  const btnRef = useRef(null);
  const titleRef = useRef(null);

  const maxDistance = 800;
  const maxScale = 1.8;
  const minScale = 1;

  const handleMouseMove = useCallback((e) => {
    if (btnRef.current) {
      // Get bounding client
      const rect = btnRef.current.getBoundingClientRect();
      const distance = Math.hypot(e.clientX - (rect.left + rect.width / 2), e.clientY - (rect.top + rect.height / 2));

      const scale = Math.max(minScale, maxScale - (distance / maxDistance) * (maxScale - minScale));

      gsap.to(btnRef.current, { x: distance / 2, scale, ease: "power2.out" });
    }
  }, []);

  // useEffect(() => {
  //   scrollPositionRef.current = window.scrollY;
  //   const debouncedHandleMouseMove = (e) => {
  //     requestAnimationFrame(() => handleMouseMove(e));
  //   };
  //   window.addEventListener("mousemove", debouncedHandleMouseMove);
  //   return () => window.removeEventListener("mousemove", debouncedHandleMouseMove);
  // }, [handleMouseMove]);

  const handleOpen = () => {
    onOpen();
    if (spotify) {
      import("../spotify");
    }
    if (video) {
      import("../video-player");
    }
  };

  return (
    <div ref={ref} style={{ backgroundColor: props.bg }} className={cn(`fixed flex items-start justify-start w-full min-h-full`, className)}>
      <Button ref={btnRef} className="font-anta cursor-pointer bg-transparent focus:outline-none flex items-center justify-center w-fit h-fit p-5" onPress={handleOpen}>
        <p className="font-bold text-xl sm:text-[2rem] uppercase">{content.title}</p>
      </Button>

      <Modal
        placement="auto"
        hideCloseButton
        scrollBehavior="inside"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        // Set the isDismissible property to false to prevent the modal from closing when clicking on the overlay.
        isDismissible={true}
        // Set the isKeyboardDismissDisabled property to true to prevent the modal from closing when pressing the Esc key.
        isKeyboardDismissDisabled={true}
        style={{
          backgroundImage: isDesktop ? `url('/static/img/${props.modalBg}-desktop.svg')` : `url('/static/img/${props.modalBg}-mobile.svg')`,
        }}
        className={`bg-cover fixed overflow-y-scroll w-full sm:min-w-[100%] min-h-[100%]`}
      >
        <div className="flex text-white sm:container z-[20]">
          <ModalContent className="w-full sm:rounded-md p-6 sm:flex sm:flex-col sm:items-center sm:justify-center bg-opacity-20 backdrop-blur-md">
            {(onClose) => (
              <>
                <div className="rounded-xl flex flex-col sm:justify-start sm:w-4/6 sm:min-h-[100%] ">
                  <div className="rounded w-full bg-custom-black-transparent shadow-custom-shadow gap-[0px] sm:flex sm:justify-start sm:items-center sm:flex-col">
                    <div className="absolute sm:relative justify-start self-start sm:w-fit w-full">
                      <Button
                        onPress={onClose}
                        className="rounded-xl relative left-[-10px] sm:left-[-15] text-white bg-transparent items-center justify-start  data-focus-none hover:text-white focus:outline-none hover:text-white"
                      >
                        <X className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]" />
                      </Button>
                    </div>
                    <ModalHeader className="sm:text-5xl gap-[10px] flex-col justify-center items-center w-full font-bold tracking-[2px] uppercase">
                      {content.title}
                      <Divider bg={"#FFF"} className="w-5/6 sm:w-[90%]" />
                    </ModalHeader>
                    <ModalBody className="w-full sm:w-[90%] flex flex-col font-bold gap-[10px] sm:gap-[15px]">
                      <p className="tracking-[0.25px] text-[13.5px] sm:text-[16px] w-full">{content.description_intro}</p>
                      <p className="tracking-[0.25px] ">{content.description_body}</p>
                      <div>
                        <Suspense fallback={<Loading />}>
                          <LazySpotify uri={content?.spotify?.uri} />
                        </Suspense>
                      </div>
                      <div className={`${video ? "block " : "hidden"}`}>
                        <Suspense fallback={<div>Loading Video...</div>}>
                          <LazyVideoPlayer src={content?.video?.src} width={"50%"} height={200} />
                        </Suspense>
                      </div>
                      <p className="tracking-[0.25px] sm:top-[-40px] relative ">{content.description_body2}</p>
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
