import { useEffect, useState } from 'react';

import { DocumentSwitcher } from './components/DocumentSwitcher';
import { DocumentView } from './components/DocumentView';
import { Hero } from './components/Hero';
import { PrintButton } from './components/PrintButton';
import { getDocumentView, parseViewHash, viewHash } from './content/documents';
import type { Doc, ProfileMeta } from './types';

import styles from './App.module.scss';

import profileDoc from '/content/profile.md';

const profile = profileDoc as unknown as Doc<ProfileMeta>;

export default function App() {
  const [view, setView] = useState(() => parseViewHash(window.location.hash));

  useEffect(() => {
    const onHashChange = () => setView(parseViewHash(window.location.hash));
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const selectView = (next: typeof view) => {
    setView(next);
    window.location.hash = viewHash(next);
  };

  const document = getDocumentView(view);

  return (
    <>
      <a className="skip-link" href="#document-content">본문 바로가기</a>
      <div className={`${styles.topbar} screen-only`}>
        <span>CAREER / DOCUMENTS</span>
        <PrintButton />
      </div>
      <div className={styles.page}>
        <Hero meta={profile.meta} />
        <main>
          <DocumentSwitcher view={view} onChange={selectView} />
          <DocumentView document={document} />
        </main>
        <footer className={styles.footer}>
          <span>김주연 · Product Engineer</span>
          <span>Built around evidence, shipped for use.</span>
        </footer>
      </div>
    </>
  );
}
