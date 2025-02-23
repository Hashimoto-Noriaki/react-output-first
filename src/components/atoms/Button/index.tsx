import React from 'react';
import styles from './style.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'danger';
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, ...rest }) => {
  const className = variant === 'primary' ? styles.primary : styles.danger;
  return (
    <button className={`${styles.button} ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
