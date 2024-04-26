'use client';
import content from './HighlightStrip.content.json';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import style from './HighlightStrip.module.scss';
import HighlightCard from '../ui/highlight-card';

const HighlightStrip = () => {
  const HighlightItems = content.Items;

  return (
    <Box>
      <Container maxWidth='' className={style.Container}>
        <Grid container>
          {HighlightItems.map((item, index) => (
            <HighlightCard className={style.HighlightItem} key={index} content={item} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HighlightStrip;
