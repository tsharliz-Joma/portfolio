'use client';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import clsx from 'clsx';
import style from './Footer.module.scss';

const Footer = () => {
  return (
    <Box className={style.Footer}>
      <Container className={style.Container}>
        <Grid container>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12}></Grid>
              <Grid item sx={12}></Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Box></Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
