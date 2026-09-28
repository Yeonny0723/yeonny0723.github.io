import { useState } from 'react';

import { applyTheme, getInitialTheme, type Theme } from '../theme';
import styles from './ThemeToggle.module.scss';

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  const changeTheme = (nextTheme: Theme) => {
    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

  return (
    <div className={styles.toggle} aria-label="화면 테마 선택" role="group">
      <button
        type="button"
        className={theme === 'light' ? styles.active : undefined}
        aria-pressed={theme === 'light'}
        onClick={() => changeTheme('light')}
      >
        <span aria-hidden="true">☼</span> Light
      </button>
      <button
        type="button"
        className={theme === 'dark' ? styles.active : undefined}
        aria-pressed={theme === 'dark'}
        onClick={() => changeTheme('dark')}
      >
        <span aria-hidden="true">☾</span> Dark
      </button>
    </div>
  );
}
