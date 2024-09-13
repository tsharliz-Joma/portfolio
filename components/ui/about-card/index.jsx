"use client";
import React, {
  forwardRef,
  useState,
  useEffect,
  useRef,
  useCallback,
  lazy,
  Suspense,
} from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
  ModalFooter,
} from "@nextui-org/react";
import Spotify from "../spotify";
import { useMediaQuery } from "react-responsive";
import { X } from "lucide-react";
import Divider from "../divider";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import Loading from "./loading";

// const LazySpotify = lazy(() => import("../spotify"));
const LazyVideoPlayer = lazy(() => import("../video-player"));

const AboutCard = forwardRef(
  ({ content, className, direction, cta, ...props }, ref) => {
    // const [open, setOpen] = useState(false);
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
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
        const distance = Math.hypot(
          e.clientX - (rect.left + rect.width / 2),
          e.clientY - (rect.top + rect.height / 2)
        );

        const scale = Math.max(
          minScale,
          maxScale - (distance / maxDistance) * (maxScale - minScale)
        );

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
      <div
        ref={ref}
        style={{ backgroundColor: props.bg }}
        className={cn(
          `fixed flex items-start justify-start w-full min-h-full`,
          className
        )}
      >
        <Button
          ref={btnRef}
          className="font-anta cursor-pointer bg-transparent focus:outline-none flex items-start justify-start w-fit h-fit p-5"
          onPress={handleOpen}
        >
          <p className="font-bold text-xl sm:text-[2rem] uppercase">
            {content.title}
          </p>
        </Button>
        <Modal
          size="full"
          isOpen={isOpen}
          onClose={onClose}
          className={`bg-cover fixed overflow-y-scroll w-full sm:min-w-[100%] min-h-[100%]`}
          style={{
            backgroundImage: isDesktop
              ? `url('/static/img/${props.modalBg}-desktop.svg')`
              : `url('/static/img/${props.modalBg}-mobile.svg')`,
          }}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalBody className=" w-full h-full grid items-center font-extrabold  text-black uppercase">
                  <div className="w-2/5 grid">
                    <ModalHeader>
                      <p className="sm:text-5xl text-left font-bold tracking-[2px] uppercases">
                        {content.title}
                      </p>
                    </ModalHeader>
                    <div className="tracking-[0.25px] text-[13.5px] sm:text-[16px]">
                      <p>{content.description_intro}</p>
                      <p>{content.description_body}</p>
                    </div>
                    <div className={`${spotify ? "block" : "hidden"}`}>
                      <Suspense fallback={<Loading />}>
                        <Spotify uri={content?.spotify?.uri} />
                      </Suspense>
                    </div>

                    <div className={`${video ? "flex" : "hidden"}`}>
                      <Suspense fallback={<div>Loading Video...</div>}>
                        <LazyVideoPlayer
                          src={content?.video?.src}
                          // width={"50%"}
                          height={200}
                        />
                      </Suspense>
                    </div>
                    <p className="tracking-[0.25px] sm:top-[-40px] relative ">
                      {content.description_body2}
                    </p>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    );
  }
);

AboutCard.displayName = "About Card";
export default AboutCard;
