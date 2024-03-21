'use client';
import clsx from 'clsx';
import style from './Testimonials.module.scss';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typograpghy from '@mui/material/Typography';

const Testimonials = ({ content }) => {
  return (
    <Box>
      <Container maxWidth='lg'>
        <Box>
          <Grid className={style.flexStartCenterDisplay} container>
            <Grid item xs={12} md={9}>
              <Box sx={{ width: '80%' }}>
                {/* Title */}
                <Box>
                  <Typograpghy variant='subtitle1'>
                    / / Feedback from users
                  </Typograpghy>
                </Box>
                {/* Description */}
                <Box className={style.paddingY}>
                  <Typograpghy variant='h5'>
                    Impressed by the coding skills showcased on CodeShowcase.
                    Consistent growth and professionalism in every project.
                  </Typograpghy>
                </Box>
                <Box>
                  {/* Author */}

                  <Typograpghy variant='subtitle1'>
                    - TechInsight Magazine
                  </Typograpghy>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box id={style.TestimonalImage}></Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;
