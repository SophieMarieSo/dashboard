import { useState, useEffect } from 'react';
import styles from './Clock.module.css';

export default function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);
  return <h1 className={styles.clock}>⏰{date.toLocaleTimeString()}</h1>;
}
