"use client";
import React, {useState} from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import content from "./Work.content.json";
import style from "./Work.module.scss";
import clsx from "clsx";

const WorkItems = () => {
  const WorkItems = content.Work;
  const [hover, setHover] = useState(false);

  return (
    <>
      {WorkItems.map((WorkItem, index) => (
        <Grid key={index} xs={12} item>
          <Box
            sx={{
              border: "1px solid red",
              display: "flex",
              justifyContent: "space-between",
              padding: "20px",
            }}>
            <Box
              sx={{
                width: "50%",
                display: "flex",
                justifyContent: "center",
              }}>
              <Box
                sx={{
                  width: "70%",
                  backgroundColor: "#000",
                  color: "#FFF",
                  borderRadius: "5px",
                }}>
                <Typography>{WorkItem.name}</Typography>
                <Typography>Client</Typography>
                <Typography>Description</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: "50%",
                display: "flex",
                justifyContent: "center",
              }}>
              <Box
                sx={{
                  width: "80%",
                  backgroundColor: "blue",
                  color: "#FFF",
                  borderRadius: "5px",
                }}>
                Image
              </Box>
            </Box>
          </Box>
        </Grid>
      ))}
    </>
  );
};

const Work = () => {
  return (
    <Box className={style.Container}>
      <Container maxWidth="lg">
        <Box className={style.HeadingBox}>
          <Typography variant="h2">Work</Typography>
        </Box>

        <Grid container sx={{border: "1px solid red"}}>
          <Container maxWidth="" spacing={3}>
            <WorkItems />
          </Container>
        </Grid>
      </Container>
    </Box>
  );
};

export default Work;
