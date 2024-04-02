import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import content from './TechStack.content.json';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import style from './TechStack.module.scss';

const TechItems = ({ content }) => {
  return (
    <>
      {content.map((item, index) => (
        <Grid key={index} item xs={12} md={3} className={style.TechStack}>
          <Box sx={{ textAlign: 'center' }}>
            <Image src={item.src} width={150} height={150} alt={item.alt} />
          </Box>
        </Grid>
      ))}
    </>
  );
};

const TechStack = () => {
  return (
    <Container className={style.Container} maxWidth=''>
      <Box>
        <Grid container justifyContent='center'>
          <TechItems content={content.TechStack} />
        </Grid>
      </Box>
    </Container>
  );
};

export default TechStack;
