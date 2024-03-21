'use client';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typograhy from '@mui/material/Typography';
import content from './Projects.content.json';
import style from './Projects.module.scss';
import clsx from 'clsx';

const ProjectItems = ({ content }) => {
  const Projects = content.Projects;
  const [hover, setHover] = useState(false);

  return (
    <>
      {Projects.map((project, index) => (
        <Grid key={index} item xs={12} md={6}>
          <Box className={style.TempBox}>
            {hover && (
              <Box className={clsx({ [style.TempOverlay]: hover })}>
                <Typograhy>Title</Typograhy>
                <Typograhy>Live Site</Typograhy>
                <Typograhy>Repo</Typograhy>
              </Box>
            )}
          </Box>
        </Grid>
      ))}
    </>
  );
};

const Projects = () => {
  return (
    <Box className={style.Container}>
      <Container maxWidth='lg'>
        <Grid container spacing={3}>
          <ProjectItems content={content} />
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
