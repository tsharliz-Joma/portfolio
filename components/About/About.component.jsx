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
gsap.registerPlugin(useGSAP);

const MyMeJustMe = () => {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <Box>
      <Container>
        <Box className={style.ButtonBox}>
          <Typography onClick={openModal}>Me</Typography>
        </Box>
        <Modal
          open={open}
          aria-labelledby='About-me-modal'
          aria-describedby='About-me-modal-description'
          onClose={closeModal}
        >
          <Box className={style.Modal}>
            <Typography>Text in modal</Typography>
          </Box>
        </Modal>
      </Container>
    </Box>
  );
};

const MyVision = () => {
  return (
    <Box>
      <Container>
        <Typography>Vision</Typography>
      </Container>
    </Box>
  );
};

const MyJourney = () => {
  return (
    <Box>
      <Container>
        <Typography>Journey</Typography>
      </Container>
    </Box>
  );
};

const About = () => {
  //Refrences
  const container = useRef(null);
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
      ease: 'power2.inOut',
      onComplete: () => animateWithinBounds(ref, bounds),
    });
  };

  // useGSAP(
  //   () => {
  //     const containerRef = container.current;
  //     const containerBounds = containerRef.getBoundingClientRect();

  //     const bounds = {
  //       width: containerBounds.width / 5,
  //       height: containerBounds.height / 5,
  //       paddingLeft: 0,
  //       paddingTop: 0,
  //       paddingRight: 5,
  //       paddingBottom: 0,
  //     };

  //     animateWithinBounds(meRef, bounds);
  //     animateWithinBounds(visionRef, bounds);
  //     animateWithinBounds(journeyRef, bounds);
  //   },
  //   { scope: container }
  // );

  return (
    <Box className={style.Container} ref={container}>
      <Container className={style.SecondaryContainer} maxWidth='lg'>
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
