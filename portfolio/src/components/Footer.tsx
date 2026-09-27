import styles from './Footer.module.scss';

export function Footer({ name }: { name: string }) {
  return <footer className={styles.footer}>{name} · Portfolio · {new Date().getFullYear()}</footer>;
}
