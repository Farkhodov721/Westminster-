import Image from 'next/image';
import styles from './Problem.module.css';

export default function Problem() {
  return (
    <section id="problem" className={styles.problem} aria-labelledby="problem-title">
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>The Problem &amp; Our Approach</span>
          <h2 className={styles.sectionTitle} id="problem-title">From raw CCTV to<br/>actionable alerts</h2>
          <p className={styles.sectionDesc}>
            Existing traffic systems rely on manual review or expensive sensor grids.
            Our pipeline runs entirely on edge hardware from a single fixed camera, combining
            learned detection with deterministic rule-based event logic.
          </p>
        </div>

        <div className={styles.approachLayout}>
          <div className="fade-in">
            <div className={styles.pipelineImgWrap}>
              <img src="/assets/pipeline.png" alt="Detection pipeline" loading="lazy" />
              <div className={styles.pipelineCaption}>Fig 1. — End-to-end inference pipeline</div>
            </div>

            <div className={styles.pipelineBoxes}>
              <div className={`${styles.pipelineBox} ${styles.boxDetector}`}>
                <div className={styles.boxStep}>Step 1</div>
                <div className={styles.boxTitle}>YOLOv8</div>
                <div className={styles.boxSub}>Detector</div>
              </div>
              <div className={styles.boxArrow}>&#8594;</div>
              <div className={`${styles.pipelineBox} ${styles.boxTracker}`}>
                <div className={styles.boxStep}>Step 2</div>
                <div className={styles.boxTitle}>ByteTrack</div>
                <div className={styles.boxSub}>Tracker</div>
              </div>
              <div className={styles.boxArrow}>&#8594;</div>
              <div className={`${styles.pipelineBox} ${styles.boxRule}`}>
                <div className={styles.boxStepRule}>Step 3</div>
                <div className={styles.boxTitle}>Rule Engine</div>
                <div className={styles.boxSub}>Event Logic</div>
              </div>
            </div>
          </div>

          <div className={`${styles.approachPoints} fade-in`}>
            <div className={styles.approachPoint}>
              <div className={styles.pointIcon}>&#127919;</div>
              <div className={styles.pointText}>
                <h4>Learned: Object Detection</h4>
                <p>YOLOv8 identifies and localises vehicles, pedestrians, and road markings in real-time — trained on our annotated intersection dataset.</p>
              </div>
            </div>
            <div className={styles.approachPoint}>
              <div className={styles.pointIcon}>&#128279;</div>
              <div className={styles.pointText}>
                <h4>Tracked: Multi-object Tracking</h4>
                <p>ByteTrack assigns persistent IDs across frames, enabling trajectory analysis — direction, speed, dwell time — without re-identification overhead.</p>
              </div>
            </div>
            <div className={styles.approachPoint}>
              <div className={styles.pointIcon}>&#9881;&#65039;</div>
              <div className={styles.pointText}>
                <h4>Rule-based: Event Classification</h4>
                <p>Deterministic logic converts trajectory features (crossing virtual lines, velocity vectors, zone membership) into labelled events — transparent, auditable, no black-box.</p>
              </div>
            </div>

            <div className={styles.learnedVsRule}>
              <div className={`${styles.lvrCol} ${styles.learned}`}>
                <h5>Learned (Neural)</h5>
                <ul>
                  <li>Object detection</li>
                  <li>Segmentation masks</li>
                  <li>Pose estimation</li>
                  <li>Re-ID embeddings</li>
                </ul>
              </div>
              <div className={`${styles.lvrCol} ${styles.rule}`}>
                <h5>Rule-based (Logic)</h5>
                <ul>
                  <li>Wrong-way check</li>
                  <li>Red-light violation</li>
                  <li>Congestion scoring</li>
                  <li>Event deduplication</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
