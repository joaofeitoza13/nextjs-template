import Card from '@/components/templates/card/Card';
import { mockCardProps } from '@/components/templates/card/Card.mocks';
import styles from '@/styles/Home.module.css';
import { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <section className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <Link href="https://nextjs.org">Next.js!</Link>
      </h1>
      <Card {...mockCardProps.base} />
    </section>
  );
};

export default Home;
