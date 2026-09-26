import { EVENT_CLASSES } from '@/data/events';
import styles from './Events.module.css';

export default function Events() {
  return (
    <section id="events" className={styles.eventsSection} aria-labelledby="events-title">
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Detection Classes</span>
          <h2 className={styles.sectionTitle} id="events-title">14 event classes,<br/>one camera</h2>
          <p className={styles.sectionDesc}>
            From life-threatening accidents to subtle traffic violations — our rule engine classifies
            all 14 event types in real-time from a single fixed CCTV feed.
          </p>
        </div>

        <div className={styles.eventsGrid}>
          {EVENT_CLASSES.map((event) => (
            <div key={event.id} className={`${styles.eventChip} fade-in ${styles['ev_' + event.id]}`}>
              <div className={styles.chipTop}>
                <div className={styles.chipDot} style={{ background: event.color }}></div>
                <div className={styles.chipIcon}>{event.icon}</div>
              </div>
              <div className={styles.chipLabel}>{event.label}</div>
              <div className={styles.chipSub}>{event.description}</div>
              {/* Note: The hover states and before pseudo-element border colors are tricky with dynamic style props. 
                  We handle them dynamically via custom properties or specific class names in CSS. */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
