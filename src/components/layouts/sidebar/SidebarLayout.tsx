import Link from 'next/link';
import styles from './SidebarLayout.module.css';

export interface ISidebarLayout {
  children?: React.ReactNode;
}

const SidebarLayout: React.FC<ISidebarLayout> = () => {
  return (
    <nav className={styles.nav}>
      <input className={styles.input} placeholder="Search..." />
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact Us</Link>
    </nav>
  );
};

export default SidebarLayout;
