import Link from 'next/link';
///import executeQuery from './_lib/db.tsx'

function Linker({ to, name }: { to: string; name: string }) {
  return (
    <>
      <Link className='mr-5' href={`/${to}`}>
        {name}
      </Link>
    </>
  );
}

const linkGroup = [
  {
    to: 'users',
    name: 'User'
  },
  {
    to: 'photos',
    name: 'Photo'
  },
  {
    to: 'main',
    name: 'Main'
  },
  {
    to: 'drag',
    name: 'Drag'
  }
];

export default function Home() {
  //const sql = 'select * from bridge.user'
  //const data = await executeQuery(sql, '')
  //const getdata = JSON.parse(JSON.stringify(data))
  return (
    <main>
      <p className='text-2xl font-bold underline'>Hello World</p>
      {linkGroup.map((o) => {
        return <Linker to={o.to} name={o.name} key={`${o.to}_index`} />;
      })}
    </main>
  );
}

//server action file -> import in component -> action to props
// dim for pro. 241008
