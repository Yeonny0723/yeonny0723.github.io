import type { ProfileMeta } from '../types';
import { PrintButton } from './PrintButton';
import styles from './Hero.module.scss';

export function Hero({ meta }: { meta: ProfileMeta }) {
  return <header className={styles.hero}>
    <h1 className={styles.name}>
      <span>{meta.name}</span>
      {meta.englishName && <span className={styles.secondaryName} lang="en">{meta.englishName}</span>}
    </h1>
    <p className={styles.title}>{meta.title}</p>
    <div className={styles.contact}>
      {meta.email && <a href={`mailto:${meta.email}`}>{meta.email}</a>}
      {meta.github && <a href={meta.github} target="_blank" rel="noreferrer noopener">GitHub</a>}
      {meta.linkedin && <a href={meta.linkedin} target="_blank" rel="noreferrer noopener">LinkedIn</a>}
      {meta.blog && <a href={meta.blog} target="_blank" rel="noreferrer noopener">Blog</a>}
      <PrintButton />
    </div>
  </header>;
}
