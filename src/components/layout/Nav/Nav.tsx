'use client';
import { useEffect, useState } from 'react';
import styles from './Nav.module.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} aria-label="Main navigation">
      <div className={styles.inner}>
        <div className={styles.logo}>
          <span>Traffic<span className={styles.dot}>Sense</span></span>
          <span className={styles.logoSub}>CV · WIUT 2026</span>
        </div>
        <ul className={styles.links}>
          <li><a href="#problem" className={activeId === 'problem' ? styles.active : ''}>Approach</a></li>
          <li><a href="#events" className={activeId === 'events' ? styles.active : ''}>Events</a></li>
          <li><a href="#results" className={activeId === 'results' ? styles.active : ''}>Results</a></li>
          <li><a href="#team" className={activeId === 'team' ? styles.active : ''}>Team</a></li>
          <li><a href="https://github.com" className={styles.cta}>GitHub &rarr;</a></li>
        </ul>
      </div>
    </nav>
  );
}
