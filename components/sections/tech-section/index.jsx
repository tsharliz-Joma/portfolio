'use client';
import React, { useRef, useEffect } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import style from './TechStack.module.scss';
import TechCard from '@/components/ui/tech-card';
import content from './TechStack.content.json';

const TechStack = () => {
  const TechStack = content.TechStack
  return (
    <Box className={style.Container}>
      <Container maxWidth=''>
        <Box className={style.HeadingBox}>
          <Typography variant='h2'>Tech Stack</Typography>
        </Box>
        <Box className={style.InfiniteContainer}>
          <Grid container justifyContent='center'>
            {TechStack.map((item, index) => (
              <TechCard key={index} content={item} />
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

TechStack.displayName = 'Tech Stack';
export default TechStack;
