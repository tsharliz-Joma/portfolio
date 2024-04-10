'use client';
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import style from './About.module.scss';
import CloseIcon from '@mui/icons-material/Close';

const MyMeJustMe = () => {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <Box>
      <Container>
        <Box className={style.ButtonBox}>
          <Button variant='outlined' onClick={openModal}>
            <Typography onClick={openModal}>Me</Typography>
          </Button>
        </Box>
        <Modal
          open={open}
          aria-labelledby='About-me-modal'
          aria-describedby='About-me-modal-description'
          onClose={closeModal}
        >
          <Box className={style.Modal}>
            <Box className={style.ModalInfo}>
              <Box>
                <Typography variant='h4'>Boxer</Typography>
                <Typography variant='body1'>Info about boxing</Typography>
              </Box>
              <Box>
                <Typography variant='h4'>Barista</Typography>
                <Typography variant='body1'>Info about baristaing</Typography>
              </Box>
              <Box>
                <Typography variant='h4'>Music</Typography>
                <Typography variant='body1'>Info about Skating</Typography>
              </Box>
              <Button className={style.ModalCloseButton} variant='outline'>
                <CloseIcon onClick={closeModal} />
              </Button>
            </Box>
          </Box>
        </Modal>
      </Container>
    </Box>
  );
};

const MyVision = () => {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <Box>
      <Container>
        <Box className={style.ButtonBox}>
          <Button variant='outlined' onClick={openModal}>
            <Typography onClick={openModal}>Vision</Typography>
          </Button>
        </Box>
        <Modal
          open={open}
          aria-labelledby='My-vision-modal'
          aria-describedby='My-vision-description'
          onClose={closeModal}
        >
          <Box className={style.Modal}>
            <Box className={style.ModalInfo}>
              <Box>
                <Typography variant='h4'>My Dreams</Typography>
                <Typography variant='body1'>
                  Little Description about my goals, dreams and what i see
                </Typography>
              </Box>
              <Button className={style.ModalCloseButton} variant='outline'>
                <CloseIcon onClick={closeModal} />
              </Button>
            </Box>
          </Box>
        </Modal>
      </Container>
    </Box>
  );
};

const MyJourney = () => {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <Box>
      <Container>
        <Box className={style.ButtonBox}>
          <Button variant='outlined' onClick={openModal}>
            <Typography onClick={openModal}>Journey</Typography>
          </Button>
        </Box>
        <Modal
          open={open}
          aria-labelledby='My-journey-modal'
          aria-describedby='My-journey-modal-description'
          onClose={closeModal}
        >
          <Box className={style.Modal}>
            <Box className={style.ModalInfo}>
              <Box>
                <Typography variant='h4'>My Journey</Typography>
                <Typography variant='body1'>
                  Little Description of my Journey so far , things ive overcome
                </Typography>
              </Box>
              <Button className={style.ModalCloseButton} variant='outline'>
                <CloseIcon onClick={closeModal} />
              </Button>
            </Box>
          </Box>
        </Modal>
      </Container>
    </Box>
  );
};

const About = () => {
  //Refrences
  const containerRef = useRef(null);
  const meRef = useRef(null);
  const visionRef = useRef(null);
  const journeyRef = useRef(null);
  //   Function takes a ref and animates the x and y position
  //     randomly and continuously
  const animateWithinBounds = (ref, bounds) => {
    const x = gsap.utils.random(
      // random number
      bounds.paddingLeft, // between this value
      bounds.width - bounds.paddingRight, // and this value
      true // allow floating digits
    );
    const y = gsap.utils.random(
      bounds.paddingTop,
      bounds.height - bounds.paddingBottom,
      true
    );
    gsap.to(ref.current, {
      x: x,
      y: y,
      duration: gsap.utils.random(1, 5),
      ease: 'power4.inOut',

      onComplete: () => animateWithinBounds(ref, bounds),
    });
  };

  useGSAP(
    () => {
      const container = containerRef.current;
      const elements = [meRef.current, visionRef.current, journeyRef.current];

      if (container) {
        const test = container.getBoundingClientRect();
        const {
          width: containerWidth,
          height: containerHeight,
          x: containerX,
          y: containerY,
          left: containerLeft,
          right: containerRight,
          top: containerTop,
          bottom: containerBottom,
        } = container.getBoundingClientRect();

        console.log(test);

        elements.forEach((el) => {
          if (el) {
            const { width: elWidth, height: elHeight } =
              el.getBoundingClientRect();

            const maxElX = containerWidth - elWidth;
            const maxElY = containerHeight - elHeight;

            const animate = () => {
              gsap.to(el, {
                x: gsap.utils.random(0, maxElX, 5),
                y: gsap.utils.random(0, maxElY, 5),
                duration: gsap.utils.random(1, 5, 1),
                ease: 'none',
                onComplete: animate,
              });
            };

            animate();
          }
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <Box className={style.Container}>
      <Container
        className={style.SecondaryContainer}
        ref={containerRef}
        maxWidth='lg'
      >
        <Box className={style.FloatBox} ref={meRef}>
          <MyMeJustMe />
        </Box>
        <Box className={style.FloatBox} ref={visionRef}>
          <MyVision />
        </Box>
        <Box className={style.FloatBox} ref={journeyRef}>
          <MyJourney />
        </Box>
      </Container>
    </Box>
  );
};

export default About;
