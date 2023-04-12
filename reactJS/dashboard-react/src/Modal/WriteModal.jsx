import React, { useState } from 'react';
import styles from './WriteModal.module.css';
import { MdClose } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';
import Button from '@mui/material/Button';
import { TextField } from '@material-ui/core';

export default function WriteModal({ setOpen, onAdd }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const closeModal = () => setOpen(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ id: uuidv4(), title, author, text });
    closeModal();
  };

  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.writeForm}>
        <button className={styles.close} onClick={closeModal}>
          <MdClose />
        </button>
        <form
          className={styles.form}
          autoComplete='off'
          onSubmit={handleSubmit}
        >
          <TextField
            id='standard-basic'
            label='제목'
            variant='standard'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
            InputLabelProps={{ required: true }}
          />
          <TextField
            id='standard-basic'
            label='글쓴이'
            variant='standard'
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
            required
          />
          <TextField
            id='standard-multiline-static'
            label='글 내용 입력'
            multiline
            minRows={4}
            variant='standard'
            className={styles.textArea}
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            required
          />
          <Button variant='contained' className={styles.saveBtn} type='submit'>
            저장
          </Button>
        </form>
      </div>
    </>
  );
}
