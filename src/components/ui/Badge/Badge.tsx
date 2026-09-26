import React from 'react';
import styles from './Badge.module.css';

interface BadgeProps {
  label: string;
  color?: string;
}

export default function Badge({ label, color }: BadgeProps) {
  return (
    <div className={styles.badge} style={{ color }}>
      <div className={styles.dot} style={{ background: color || 'var(--accent)' }}></div>
      {label}
    </div>
  );
}
