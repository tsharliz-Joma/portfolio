"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import clsx from "clsx";
import style from "./Footer.module.scss";

const GetInTouch = () => {
  return (
    <Box component="form" autoComplete="off">
      <Box className={style.GetInTouch}>
        <Box>
          <Box>
            <Typography variant="button">Say hey</Typography>
          </Box>
          <Box className={style.DisplayFlexCenterAround}>
            <TextField className={style.Input} variant="outlined" label="email" size="small" />
            <Button variant="contained">Send</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const Footer = () => {
  return (
    <Box className={style.Footer}>
      <Container className={style.Container}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Grid container>
              <Grid item xs={12} md={6}></Grid>
              <Grid item sx={12} md={6}></Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <GetInTouch />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
