import type { DocumentKind, ViewState } from '../types';
import { DOCUMENT_TABS, POSITION_TABS } from '../content/documents';

import styles from './DocumentSwitcher.module.scss';

export function DocumentSwitcher({
  view,
  onChange,
}: {
  view: ViewState;
  onChange: (next: ViewState) => void;
}) {
  const selectDocument = (kind: DocumentKind) => {
    if (kind === 'portfolio') onChange({ kind });
    else onChange({ kind, position: view.position ?? 'ai' });
  };

  return (
    <section className={styles.wrapper} aria-label="문서 선택">
      <div className={styles.row}>
        <span className={styles.label}>DOCUMENT</span>
        <div className={styles.tabs} role="group" aria-label="문서 종류">
          {DOCUMENT_TABS.map((tab) => (
            <button
              key={tab.kind}
              type="button"
              className={view.kind === tab.kind ? styles.active : undefined}
              aria-pressed={view.kind === tab.kind}
              onClick={() => selectDocument(tab.kind)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className={`${styles.row} ${view.kind === 'portfolio' ? styles.hiddenRow : ''}`}>
        <span className={styles.label}>POSITION</span>
        <div className={styles.tabs} role="group" aria-label="지원 포지션">
          {POSITION_TABS.map((tab) => (
            <button
              key={tab.position}
              type="button"
              className={view.position === tab.position ? styles.active : undefined}
              aria-pressed={view.position === tab.position}
              onClick={() => onChange({ kind: view.kind, position: tab.position })}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
