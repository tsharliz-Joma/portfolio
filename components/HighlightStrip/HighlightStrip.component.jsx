'use client';
import content from './HighlightStrip.content.json';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const HighlightItems = ({ content }) => {
  return (
    <>
      {content.map((item, index) => (
        <Grid key={index} item xs={3}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant='h4'>{item.title}</Typography>
            <Typography variant='subtitle2'>{item.description}</Typography>
          </Box>
        </Grid>
      ))}
    </>
  );
};

const HighlightStrip = () => {
  return (
    <Box>
      <Container maxWidth=''>
        <Grid container>
          <HighlightItems content={content.Items} />
        </Grid>
      </Container>
    </Box>
  );
};

export default HighlightStrip;
