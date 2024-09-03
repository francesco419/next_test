import Link from 'next/link';

export default function FirstPage() {
  let photos = Array.from({ length: 6 }, (_, i) => i + 1);
  return (
    <div>
      <p>fisrt page</p>
      <section className='cards-container'>
        {photos.map((id) => (
          <Link className='card' key={id} href={`/photos/${id}`} passHref>
            {id}
          </Link>
        ))}
      </section>
    </div>
  );
}
