import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>Hello World</div>
      <Link href='/users/3'>to User</Link>
    </main>
  );
}
