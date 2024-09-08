import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div>Hello World</div>
      <Link href='/users/3'>to User</Link>
      <Link href='/photos'>Photo</Link>
    </main>
  );
}
