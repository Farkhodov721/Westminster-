import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'outline';
  icon?: React.ReactNode;
}

export default function Button({ variant = 'primary', icon, children, className, ...props }: ButtonProps) {
  return (
    <a className={`${styles.btn} ${styles[variant]} ${className || ''}`} {...props}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </a>
  );
}
