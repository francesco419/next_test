export default function RoundBorderButton({
  children
}: {
  children: string | React.ReactNode;
}) {
  return (
    <>
      <button className='bg-none rounded-lg border-2  border-white py-2 text-white px-4 text-xl hover:bg-white hover:text-black z-50 transition duration-700'>
        {children}
      </button>
    </>
  );
}
