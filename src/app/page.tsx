import Link from 'next/link';
///import executeQuery from './_lib/db.tsx'

export default function Home() {
  //const sql = 'select * from bridge.user'
  //const data = await executeQuery(sql, '')
  //const getdata = JSON.parse(JSON.stringify(data))
  return (
    <main>
      <div>Hello World</div>
      <Link href='/users/3'>to User</Link>
      <Link href='/photos'>Photo</Link>
    </main>
  );
}

//server action file -> import in component -> action to props
