import React, { useState } from 'react';
import styles from './UpdateModal.module.css';
import { MdClose } from 'react-icons/md';
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';

export default function UpdateModal({ setOpen, table, onUpdate }) {
  const [form, setForm] = useState({ id: '', title: '', author: '', text: '' });
  const closeModal = () => setOpen(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({
      id: form.id,
      title: form.title,
      author: form.author,
      text: form.text,
    });
    console.log(form.title);
    console.log(form.author);
    console.log(form.text);
    closeModal();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...table,
      [name]: value,
    });
  };
  return (
    <td>
      <div className={styles.overlay}></div>
      <div className={styles.updateForm}>
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
            name='title'
            onChange={handleChange}
            defaultValue={table.title}
          />
          <TextField
            id='standard-basic'
            label='글쓴이'
            name='author'
            variant='standard'
            onChange={handleChange}
            defaultValue={table.author}
          />
          <TextField
            id='standard-multiline-static'
            label='글 내용 입력'
            multiline
            variant='standard'
            name='text'
            className={styles.textArea}
            onChange={handleChange}
            minRows={4}
            defaultValue={table.text}
          />
          <Button variant='contained' className={styles.saveBtn} type='submit'>
            수정
          </Button>
        </form>
      </div>
    </td>
  );
}
