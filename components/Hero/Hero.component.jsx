import Container from '@mui/material/Container';
import Image from 'next/image';
import Box from '@mui/material/Box';
import clsx from 'clsx';
import style from './Hero.module.scss';

const Hero = ({ src, alt, maxWidth }) => {
  return (
    <Container maxWidth={maxWidth}>
      <Box className={style.ImageBox}>
        <Image src={src} alt={alt} layout='responsive' />
      </Box>
    </Container>
  );
};

export default Hero;
