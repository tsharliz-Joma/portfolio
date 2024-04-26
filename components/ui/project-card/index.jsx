// Each individual Project
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography  from '@mui/material/Typography';
import style from './style.module.scss';

const ProjectCard = ({ content }) => {
  const Projects = content.Projects;
  const [hover, setHover] = React.useState(false);

  return (
    <>
      {Projects.map((project, index) => (
        <Grid key={index} item xs={12} md={6}>
          <Box className={style.TempBox}>
            {hover && (
              <Box className={clsx({ [style.TempOverlay]: hover })}>
                <Typography>Title</Typography>
                <Typography>Live Site</Typography>
                <Typography>Repo</Typography>
              </Box>
            )}
          </Box>
        </Grid>
      ))}
    </>
  );
};

ProjectCard.displayName = 'Project Card';
export default ProjectCard;
