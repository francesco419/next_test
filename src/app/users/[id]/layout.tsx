import React from 'react';
import styles from '@/app/page.module.css';

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
      {children}
    </main>
  );
}
