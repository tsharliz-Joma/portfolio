import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import style from './style.module.scss';
import CloseIcon from '@mui/icons-material/Close';

const InfoCard = React.forwardRef(({ content, ...props }, ref) => {
    
  const [open, setOpen] = React.useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <Box ref={ref}>
      <Container>
        <Box className={style.ButtonBox}>
          <Button variant='outlined' onClick={openModal}>
            <Typography onClick={openModal}>{content.title}</Typography>
          </Button>
        </Box>
        <Modal
          open={open}
          aria-labelledby='My-journey-modal'
          aria-describedby='My-journey-modal-description'
          onClose={closeModal}
        >
          <Box className={style.Modal}>
            <Box className={style.ModalInfo}>
              <Box>
                <Typography variant='h4'>{content.title}</Typography>
                <Typography variant='body1'>
                  {content.description}
                </Typography>
              </Box>
              <Button className={style.ModalCloseButton} variant='outline'>
                <CloseIcon onClick={closeModal} />
              </Button>
            </Box>
          </Box>
        </Modal>
      </Container>
    </Box>
  );
});

InfoCard.displayName = 'Info Card';
export default InfoCard;
