import Image from 'next/image';
import styles from '@/app/page.module.css';

export default async function Home() {
  /* const data = await new Promise(() => {
    setTimeout(() => {
      console.log(1);
    }, 5000);
    return 'name';
  }); */

  return <div className={styles.description}>Hello users : </div>;
}
