import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Image from 'next/image';
import style from './style.module.scss';

const TechCard = React.forwardRef(({ content, ...props }, ref) => {
  return (
    <Grid key={content.index} item xs={12} md={3}>
      <Box sx={{ textAlign: 'center' }}>
        <Image src={content.src} width={150} height={150} alt={content.alt} />
      </Box>
    </Grid>
  );
});

TechCard.displayName = 'Tech Display Card';
export default TechCard;
