import React, { useState } from 'react';
import Button from '@mui/material/Button';
import styles from './Header.module.css';
import Typography from '@mui/material/Typography';
import WriteModal from '../Modal/WriteModal';
import Table from '../Table/Table';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [table, setTable] = useState([]);
  const handleClick = () => setOpen(true);
  const handleAdd = (item) => {
    setTable([...table, item]);
  };
  const handleDelete = (deleted) => {
    setTable(table.filter((item) => item.id !== deleted.id));
  };
  const handleUpdate = (update) => {
    setTable(
      table.map((item) => {
        if (item.id === update.id) {
          return update;
        }
        return item;
      })
    );
  };
  return (
    <header className={styles.header}>
      <Typography variant='h3' gutterBottom className={styles.h1}>
        DashBoard
      </Typography>
      <Button
        variant='contained'
        className={styles.button}
        onClick={handleClick}
      >
        신규
      </Button>
      {open && <WriteModal setOpen={setOpen} onAdd={handleAdd} />}
      <table className={styles.container}>
        {table.map((item) => (
          <Table
            key={item.id}
            table={item}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </table>
    </header>
  );
}
