"use client";
import React, {
  forwardRef,
  useState,
  useRef,
  lazy,
  Suspense,
  useEffect,
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
import {useMediaQuery} from "react-responsive";
import {cn} from "@/lib/utils";
import gsap from "gsap";
import Loading from "./loading";
import ScrollTrigger from "gsap/ScrollTrigger";

const LazyVideoPlayer = lazy(() => import("../video-player"));

const AboutCard = forwardRef(
  ({content, className, direction, cta, ...props}, ref) => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const isDesktop = useMediaQuery({minWidth: "640px"});
    const [spotify, setSpotify] = useState(!!content.spotify?.uri);
    const [video, setVideo] = useState(!!content.video?.src);
    const btnRef = useRef(null);

    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);

      const bounceAnimation = gsap.fromTo(
        btnRef.current,
        {scale: 1},
        {
          scale: 1.2,
          yoyo: true,
          repeat: -1,
          duration: 0.35,
          ease: "power1.inOut",
          paused: true,
        },
      );

      const scrollTrigger = ScrollTrigger.create({
        trigger: ref.current,
        start: "top center",
        onEnter: () => {
          bounceAnimation.play();
        },
        onLeave: () => {
          bounceAnimation.pause();
        },
      });

      return () => {
        scrollTrigger.kill();
        bounceAnimation.kill();
      };
    }, [ref]);

    const handleOpen = () => {
      onOpen();
      if (spotify) import("../spotify");
      if (video) import("../video-player");
    };

    return (
      <div
        ref={ref}
        style={{backgroundColor: props.bg}}
        className={cn(
          `fixed flex items-start justify-start w-full min-h-full`,
          className,
        )}>
        <Button
          ref={btnRef}
          className="font-anta cursor-pointer bg-transparent focus:outline-none flex items-start justify-start w-fit h-fit p-5"
          onPress={handleOpen}>
          <p className="font-bold text-xl sm:text-2xl uppercase">
            {content.title}
          </p>
        </Button>

        <Modal
          size="full"
          isOpen={isOpen}
          onClose={onClose}
          className="fixed overflow-y-auto bg-cover w-full min-h-full"
          style={{
            backgroundImage: isDesktop
              ? `url('/static/img/${props.modalBg}-desktop.svg')`
              : `url('/static/img/${props.modalBg}-mobile.svg')`,
          }}>
          <ModalContent>
            <div className="grid grid-cols-2 gap-5 p-5">
              <ModalBody className="flex flex-col font-extrabold text-black uppercase">
                <ModalHeader>
                  <p className="sm:text-5xl font-bold tracking-wide">
                    {content.title}
                  </p>
                </ModalHeader>
                <div className="text-sm sm:text-base">
                  <p>{content.description_intro}</p>
                  <p>{content.description_body}</p>
                </div>

                {spotify && (
                  <Suspense fallback={<Loading />}>
                    <Spotify uri={content.spotify.uri} />
                  </Suspense>
                )}

                {video && (
                  <Suspense fallback={<div>Loading Video...</div>}>
                    <LazyVideoPlayer
                      src={content.video.src}
                      height="auto" // Dynamically set height
                    />
                  </Suspense>
                )}

                <p>{content.description_body2}</p>
              </ModalBody>

              <ModalFooter>
                <Button color="danger" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </div>
          </ModalContent>
        </Modal>
      </div>
    );
  },
);

AboutCard.displayName = "AboutCard";
export default AboutCard;
