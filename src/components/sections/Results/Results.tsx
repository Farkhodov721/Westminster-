import { RESULT_CARDS } from '@/data/results';
import Badge from '@/components/ui/Badge/Badge';
import styles from './Results.module.css';

export default function Results() {
  return (
    <section id="results" className={styles.resultsSection} aria-labelledby="results-title">
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Results Preview</span>
          <h2 className={styles.sectionTitle} id="results-title">System in action</h2>
          <p className={styles.sectionDesc}>
            Annotated outputs from our test intersection. Each timeline bar shows detected event
            segments across the clip duration, colour-coded by class.
          </p>
        </div>

        <div className={styles.resultsGrid}>
          {RESULT_CARDS.map((card) => (
            <div key={card.id} className={`${styles.resultCard} fade-in`}>
              <div className={styles.resultThumb}>
                <img src={card.image} alt={card.imageAlt} loading="lazy" />
                <div className={styles.resultOverlay}>
                  {card.badges.map((badge, idx) => (
                    <Badge key={idx} label={badge.label} color={badge.color} />
                  ))}
                </div>
              </div>
              <div className={styles.resultBody}>
                <div className={styles.resultTitle}>{card.title}</div>
                <div className={styles.resultMeta}>
                  {card.clip} &nbsp;·&nbsp; {card.duration} &nbsp;·&nbsp; {card.fps} fps
                </div>
                
                <div className={styles.timelineBar} role="img" aria-label="Event timeline">
                  {card.timeline.map((segment, idx) => (
                    <div 
                      key={idx} 
                      className={styles.tlSeg} 
                      style={{ 
                        width: `${segment.width}%`, 
                        background: segment.color,
                        opacity: segment.opacity || 1
                      }} 
                    />
                  ))}
                </div>
                
                <div className={styles.timelineLegend}>
                  {card.legend.map((item, idx) => (
                    <div key={idx} className={styles.tlLegendItem}>
                      <div className={styles.tlLegendDot} style={{ background: item.color }}></div>
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
