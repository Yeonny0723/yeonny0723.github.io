import styles from './PrintButton.module.scss';

export function PrintButton() {
  return (
    <button type="button" className={styles.button} onClick={() => window.print()}>
      Export to PDF <span aria-hidden="true">↗</span>
    </button>
  );
}
