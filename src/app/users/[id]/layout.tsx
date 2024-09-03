import React from 'react';
import styles from '@/app/page.module.css';
import Link from 'next/link';

export default function UsersLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={styles.main} style={{ width: '100%' }}>
      <header>
        <h1>header</h1>
      </header>
      <hr />
      <Link href='/users/3/first'>First</Link>
      <Link href='/users/3/second'>Second</Link>
      {children}
    </main>
  );
}
