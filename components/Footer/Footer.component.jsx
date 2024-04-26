'use client';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import clsx from 'clsx';
import style from './Footer.module.scss';
import ContactCard from '../ui/contact-card';

const Footer = () => {
  return (
    <Box className={style.Footer}>
      <Container className={style.Container} maxWidth='lg'>
        <Grid container>
          <Grid className={style.DisplayFlexCenterAround} item xs={12} md={6}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Box className={style.FooterSocialItem}>
                  <Typography>Charles Joma</Typography>
                </Box>
                <Box className={style.FooterSocialItem}>
                  <EmailIcon />
                  <Typography>tsharlizjoma@yahoo.com</Typography>
                </Box>
                <Box className={style.FooterSocialItem}>
                  <LinkedInIcon />
                  <Typography>LinkedIn</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} className={style.FooterNavItem}>
                <Typography>Home</Typography>
                <Typography>About</Typography>
                <Typography>Projects</Typography>
                <Typography>Work Experience</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <ContactCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
