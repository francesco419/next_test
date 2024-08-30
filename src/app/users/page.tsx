import Image from 'next/image';
import styles from '@/app/page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>Hello users</div>
    </main>
  );
}
