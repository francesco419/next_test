export function generateStaticParams() {
  let slugs = ['1', '2', '3', '4', '5', '6'];
  return slugs.map((slug) => ({ id: slug }));
}

export default function MainModalPage({
  params: { id }
}: {
  params: { id: string };
}) {
  return (
    <>
      <div className='card'>This is Not Modal</div>
    </>
  );
}
