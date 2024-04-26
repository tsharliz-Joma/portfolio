'use client';
import clsx from 'clsx';
import style from './Testimonials.module.scss';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import content from './Testimonials.content.json';
import TestimonialCard from '@/components/ui/testimonial-card';

const Testimonials = () => {
  const Testimonials = content.Testimonials;

  return (
    <Box className={style.Container}>
      <Container maxWidth='lg'>
        <Box>
          <Grid className={style.flexStartCenterDisplay} container>
            <Grid item xs={12} md={9}>
              <Box sx={{ width: '80%' }}>
                {Testimonials.map((item, index) => (
                  <TestimonialCard key={item} content={item} />
                ))}
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
