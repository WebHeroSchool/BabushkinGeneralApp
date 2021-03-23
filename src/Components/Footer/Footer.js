import React from 'react';
import styles from './Footer.module.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Footer = ({ count }) => (<footer className={styles.footer}><span className={styles.deals}>Осталось дел: {count}</span>
      <ButtonGroup className={styles.buttons} color="primary" aria-label="outlined primary button group">
        <Button className={styles.button}>Всего</Button>
        <Button className={styles.button}>Выполнено</Button>
        <Button className={styles.button}>Активные</Button>
      </ButtonGroup>
      <ButtonGroup className={styles.buttons} color="primary" aria-label="outlined primary button group">
        <Button className={styles.button}>Удалить выполненные</Button>
      </ButtonGroup>
    </footer>)

export default Footer;