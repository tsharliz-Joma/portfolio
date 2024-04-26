'use client';
import { useRef, useEffect, useState, forwardRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import style from './About.module.scss';
import CloseIcon from '@mui/icons-material/Close';
import InfoCard from '../ui/about-card';
import content from './About.content.json';
import ScrollTrigger from 'gsap/ScrollTrigger';
import CustomCard from '../ui/custom-card';
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  //Refrences
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { autoAlpha: 0, scale: 0.5 },
        {
          duration: 1,
          autoAlpha: 1,
          scale: 1,
          scrollTrigger: {
            trigger: card,
            start: 'top center-=100',
            end: 'bottom top',
            scrub: true,
            markers: true,
          },
        }
      );
    });
  }, []);

  return (
    <Box className={style.Container}>
      <Container
        ref={containerRef}
        maxWidth='lg'
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          border: '1px solid red',
        }}
      >
        {content.About.map((item, index) => (
          <CustomCard key={index} ref={(el) => (cardsRef.current[index] = el)}>
            <InfoCard content={item} />
          </CustomCard>
        ))}
      </Container>
    </Box>
  );
};

export default About;
