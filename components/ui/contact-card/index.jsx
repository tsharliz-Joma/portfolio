import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import style from './styles.module.scss';

const ContactCard = () => {
  return (
    <Box component='form' autoComplete='off'>
      <Box className={style.GetInTouch}>
        <Box>
          <Box>
            <Typography variant='button'>Say hey</Typography>
          </Box>
          <Box className={style.DisplayFlexCenterAround}>
            <TextField
              className={style.Input}
              variant='outlined'
              label='email'
              size='small'
            />
            <Button variant='contained'>Send</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

ContactCard.displayName = 'Contact Card'
export default ContactCard