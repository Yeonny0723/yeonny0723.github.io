import type { CareerDocument } from '../types';

import styles from './DocumentView.module.scss';

export function DocumentView({ document }: { document: CareerDocument }) {
  return (
    <article id="document-content" className={styles.document}>
      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}>{document.label}</p>
          <h2>{document.title}</h2>
        </div>
        <p className={styles.marker}>EVIDENCE-LED / PRODUCT-MINDED</p>
      </header>
      <div className={`${styles.body} prose`} dangerouslySetInnerHTML={{ __html: document.bodyHtml }} />
    </article>
  );
}
