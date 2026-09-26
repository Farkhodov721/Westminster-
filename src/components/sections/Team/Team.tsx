import { TEAM_MEMBERS } from '@/data/team';
import styles from './Team.module.css';

export default function Team() {
  return (
    <section id="team" className={styles.teamSection} aria-labelledby="team-title">
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>The Team</span>
          <h2 className={styles.sectionTitle} id="team-title">Meet the builders</h2>
          <p className={styles.sectionDesc}>
            A multidisciplinary team from WIUT — combining ML engineering, computer vision research,
            and systems programming to tackle real-world traffic safety.
          </p>
        </div>

        <div className={styles.teamGrid}>
          {TEAM_MEMBERS.map((member, i) => (
            <div key={i} className={`${styles.teamCard} fade-in`}>
              <div className={styles.avatar} style={{ background: member.avatarGradient }}>
                {member.initials}
              </div>
              <div className={styles.memberName}>{member.name}</div>
              <div className={styles.memberRole}>{member.role}</div>
              <div className={styles.memberLinks}>
                <a href={member.github} className={styles.memberLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.03c-3.34.73-4.04-1.6-4.04-1.6-.55-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.8 1.3 3.48.99.1-.77.41-1.3.75-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.21.69.82.57C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z"/></svg>
                  GitHub
                </a>
                <a href={member.linkedin} className={styles.memberLink} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
