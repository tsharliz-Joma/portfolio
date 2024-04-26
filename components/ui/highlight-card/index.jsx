import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const HighlightCard = React.forwardRef(
  ({ className, content, ...props }, ref) => {
    return (
      <Grid item xs={12} md={3} className={className}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant='h4'>{content.title}</Typography>
          <Typography variant='subtitle2'>{content.description}</Typography>
        </Box>
      </Grid>
    );
  }
);

HighlightCard.displayName = 'Highlight Card';
export default HighlightCard;
