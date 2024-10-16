export default function MainLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <>
      <main className='bg-black'>
        {children}
        {modal}
      </main>
    </>
  );
}
