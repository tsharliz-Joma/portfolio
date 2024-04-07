'use client';
import clsx from 'clsx';
import style from './Testimonials.module.scss';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import content from './Testimonials.content.json';

const Testimonial = ({ content }) => {
  const TestimonialItems = content; // Returns an Object
  const entries = Object.entries(TestimonialItems);
  const randomIndex = Math.floor(Math.random() * entries.length); // Returns a random Index
  const [key, value] = entries[randomIndex];
  return (
    <Box key={key}>
      <Box>
        <Typography variant='subtitle1'>{value.Title}</Typography>
      </Box>
      {/* Description */}
      <Box className={style.paddingY}>
        <Typography variant='h5'>{value.Description}</Typography>
      </Box>
      <Box>
        {/* Author */}
        <Typography variant='subtitle1'>{value.Author}</Typography>
      </Box>
    </Box>
  );
};

const Testimonials = () => {
  return (
    <Box className={style.Container}>
      <Container maxWidth='lg'>
        <Box sx={{ border: '2px solid orange' }}>
          <Grid className={style.flexStartCenterDisplay} container>
            <Grid item xs={12} md={9}>
              <Box sx={{ width: '80%' }}>
                <Testimonial content={content.Testimonials} />
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
