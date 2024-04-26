'use client';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typograhy from '@mui/material/Typography';
import content from './Projects.content.json';
import style from './Projects.module.scss';
import clsx from 'clsx';
import ProjectCard from '../../ui/project-card';

// Container for all the projects
const Projects = () => {
  return (
    <Box className={style.Container}>
      <Container maxWidth='xl'>
        <Box className={style.HeadingBox}>
          <Typograhy variant='h2'>Projects</Typograhy>
        </Box>
        <Grid container spacing={3}>
          <ProjectCard content={content} />
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
