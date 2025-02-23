import React from 'react';
import styles from './style.module.css';

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return <input className={styles.input} {...props} />;
};

export default Input;
