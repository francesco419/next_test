import Link from 'next/link';

export default function RoundBorderLink({
  children,
  onClickHandler,
  href
}: {
  children: string | React.ReactNode;
  onClickHandler: () => void;
  href: string;
}) {
  return (
    <>
      <Link
        onClick={onClickHandler}
        href={href}
        key={`link_${href}`}
        className='bg-none rounded-lg border-2  border-white py-2 text-white px-4 text-xl hover:bg-white hover:text-black z-50 transition duration-700'
      >
        {children}
      </Link>
    </>
  );
}
