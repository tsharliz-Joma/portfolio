'use client';
import { ThemeProvider } from '@mui/material/styles';
import theme from './customTheme';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ border: '2px solid red', padding: '100px 0px' }}>
        <Container
          sx={{ display: 'flex', border: '2px solid orange' }}
          maxWidth='xl'
        >
          <Grid container>
            {/* Grid Container */}
            <Grid item xs={12}>
              {/* Grid item */}
              <Box>
                <Typography variant='h2'>
                  I AM A JUNIOR DEVELOPER <br />
                  SHOWCASING MY CODING <br />
                  JOURNEY AND SKILLS.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              {/* Grid item */}
              <Box sx={{ width: 'fit-content', float: 'right' }}>
                <Typography variant='h4' textAlign={'right'}>
                  Welcome to my coding portfolio.
                  <br />
                  I enjoy building projects and Im eager to grow!
                  <br />
                  Explore my work and get in touch for collaborations.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Header;
