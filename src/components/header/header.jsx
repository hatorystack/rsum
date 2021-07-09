import React from 'react';
import styles from './header.module.css';

const Header = ({ onLogout }) => (
  <header className={styles.header}>
    {onLogout && <button onClick={onLogout}>Logout</button>}
    <h1 className={styles.title}>My Rsum</h1>
  </header>
);

export default Header;
