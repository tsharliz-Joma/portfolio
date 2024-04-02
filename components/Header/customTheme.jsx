import { createTheme } from '@mui/material/styles';

const theme = createTheme();

theme.typography.h2 = {
  fontSize: '1.7rem',
  [theme.breakpoints.up('md')]: {
    fontWeight: 600,
    fontSize: '3rem',
  },
};

theme.typography.h4 = {
  fontSize: '1.4rem',
  fontWeight: 400,
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  },
};

export default theme;
