function SubSection() {
  return (
    <div className='h-80 rounded-xl bg-zinc-600 mb-2'>
      <h1 className='text-3xl font-bold underline'>Hello, This is Plan</h1>
    </div>
  );
}

export default function Main() {
  return (
    <div>
      <SubSection />
      <SubSection />
      <SubSection />
    </div>
  );
}
