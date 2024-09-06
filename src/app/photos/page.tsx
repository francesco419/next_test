import Link from 'next/link';
import './style.css';

export default function PhotoPage({
  params: { id }
}: {
  params: { id: string };
}) {
  let slugs = ['1', '2', '3', '4', '5', '6'];
  return (
    <div style={{ display: 'flex' }}>
      {slugs.map((o) => {
        return (
          <Link
            style={{
              height: '100px',
              width: '100px',
              backgroundColor: '#ff0000',
              margin: '0 20px 0'
            }}
            href={`/photos/${o}`}
          >
            {o}
          </Link>
        );
      })}
    </div>
  );
}
