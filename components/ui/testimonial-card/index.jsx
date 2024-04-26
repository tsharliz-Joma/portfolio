import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from './style.module.scss'

const TestimonialCard = React.forwardRef(({ content,...props }, ref) => {
  return (
    <Box key={content}>
      <Box>
        <Typography variant='subtitle1'>{content.Title}</Typography>
      </Box>
      {/* Description */}
      <Box sx={{ py:5 , color: "#FFF" }}>
        <Typography variant='h5'>{content.Description}</Typography>
      </Box>
      <Box>
        {/* Author */}
        <Typography variant='subtitle1'>{content.Author}</Typography>
      </Box>
    </Box>
  );
});

TestimonialCard.displayName = 'Testimonal Card';
export default TestimonialCard
