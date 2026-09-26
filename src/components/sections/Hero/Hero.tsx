'use client';
import { useEffect, useState } from 'react';
import Button from '@/components/ui/Button/Button';
import styles from './Hero.module.css';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <div 
        className={styles.heroBg} 
        style={{ transform: `translateY(${scrollY * 0.25}px)` }}
        role="presentation" 
        aria-hidden="true" 
      />
      <div className={styles.heroGrid} aria-hidden="true"></div>
      <div className={styles.heroGradient} aria-hidden="true"></div>
      
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <div className={styles.badgePulse}></div>
            WIUT Hackathon 2026 · CV Track
          </div>
          <h1 className={styles.heroTitle}>
            <span className="accent-text">Traffic</span>Sense<br/>
            CV Detection System
          </h1>
          <p className={styles.heroPitch}>
            Real-time traffic event detection &amp; accident anticipation from fixed CCTV — 14 event classes,
            zero cloud dependency, sub-50 ms inference per frame.
          </p>
          <div className={styles.heroCtas}>
            <Button href="https://github.com" target="_blank" rel="noopener" icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.03c-3.34.73-4.04-1.6-4.04-1.6-.55-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.8 1.3 3.48.99.1-.77.41-1.3.75-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.21.69.82.57C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z"/></svg>
            }>
              View Repo
            </Button>
            <Button href="#results" variant="outline" icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            }>
              See Results
            </Button>
            <Button href="#problem" variant="outline">
              Learn More
            </Button>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <div className={styles.statVal}>14<span className="accent-text">+</span></div>
              <div className={styles.statLabel}>Event Classes</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statVal}>&lt;50<span className="accent-text">ms</span></div>
              <div className={styles.statLabel}>Inference / frame</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statVal}>1<span className="accent-text">×</span></div>
              <div className={styles.statLabel}>Fixed Camera</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statVal}>0</div>
              <div className={styles.statLabel}>Cloud Dependency</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
