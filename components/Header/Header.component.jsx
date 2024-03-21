import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const Header = () => {
  return (
    <Box>
      <Container sx={{ display: 'flex' }} maxWidth='xl'>
        <Grid container>
          {/* Grid Container */}
          <Grid item xs={12}>
            {/* Grid item */}
            <Box sx={{ width: 'fit-content' }}>
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
              <Typography variant='subtitle1' textAlign={'right'}>
                Welcome to my coding portfolio. I enjoy building projects <br />
                and Im eager to grow! <br />
                Explore my work and get in touch for collaborations.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
