import { Modal } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from './ReadModal.module.css';

export default function ReadModal({ setOpen, open, table }) {
  const closeModal = () => setOpen(false);
  return (
    <Modal onClose={closeModal} open={open}>
      <Box className={styles.modal}>
        <Typography
          id='modal-modal-title'
          variant='h6'
          component='h2'
          className={styles.box}
        >
          <div>
            <span className={styles.span}>제목 </span>
            {table.title}
          </div>
          <div>
            <span className={styles.span}>글쓴이 </span>
            {table.author}
          </div>
        </Typography>
        <Typography
          id='modal-modal-description'
          variant='h6'
          className={styles.text}
        >
          <span className={styles.span}>내용 </span>
          {table.text}
        </Typography>
      </Box>
    </Modal>
  );
}
