import React, { useState } from 'react';
import styles from './Table.module.css';
import Button from '@mui/material/Button';
import ReadModal from '../Modal/ReadModal';
import UpdateModal from './../Modal/UpdateModal';

export default function TableList({ table, onDelete, onUpdate }) {
  let time = new Date();
  const [open, setOpen] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const handleClick = () => setOpen(true);
  const handleUpdate = () => setUpdateModal(true);
  return (
    <tbody>
      <tr>
        <td className={styles.title} onClick={handleClick}>
          {table.title}
        </td>
        <td>{table.author}</td>
        <td>
          {time.getFullYear()}년 {String(time.getMonth() + 1).padStart(2, '0')}
          월 {String(time.getDate() + 1).padStart(2, '0')}일
          {String(time.getHours() + 1).padStart(2, '0')}시
          {String(time.getMinutes() + 1).padStart(2, '0')}분
        </td>
        <td>
          <Button variant='contained' color='success' onClick={handleUpdate}>
            수정
          </Button>
        </td>
        <td>
          <Button
            variant='contained'
            color='error'
            onClick={() => onDelete(table)}
          >
            삭제
          </Button>
        </td>
        {open && <ReadModal setOpen={setOpen} open={open} table={table} />}
        {updateModal && (
          <UpdateModal
            setOpen={setUpdateModal}
            table={table}
            onUpdate={onUpdate}
          />
        )}
      </tr>
    </tbody>
  );
}
