import type { ProfileMeta } from '../types';

import styles from './Hero.module.scss';

export function Hero({ meta }: { meta: ProfileMeta }) {
  return (
    <header className={styles.hero}>
      <div className={styles.kicker}>JY / CAREER SYSTEM · 2026</div>
      <div className={styles.heroGrid}>
        <div>
          <h1 className={styles.name}>
            <span>{meta.name}</span>
            {meta.englishName && <span className={styles.secondaryName} lang="en">{meta.englishName}</span>}
          </h1>
          <p className={styles.title}>{meta.title}</p>
        </div>
        <p className={styles.statement}>
          프론트엔드의 사용성, 백엔드의 안정성, AI의 가능성과 운영 효율이 만나는 지점에서 실제로 동작하는 제품을 만듭니다.
        </p>
      </div>
      <div className={styles.contact}>
        {meta.email && <a href={`mailto:${meta.email}`}>{meta.email}</a>}
        {meta.github && <a href={meta.github} target="_blank" rel="noreferrer noopener">GitHub</a>}
        {meta.linkedin && <a href={meta.linkedin} target="_blank" rel="noreferrer noopener">LinkedIn</a>}
        {meta.blog && <a href={meta.blog} target="_blank" rel="noreferrer noopener">Blog</a>}
      </div>
    </header>
  );
}
