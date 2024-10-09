function SubSection() {
  return (
    <div className='h-[32rem] rounded-xl bg-zinc-600 hover:bg-slate-300 transition duration-700'>
      <div className='p-5 box-border'>
        <h1 className='text-3xl font-bold underline'>Hello, This is Plan</h1>
      </div>
    </div>
  );
}

export default function Main() {
  return (
    <div className='flex gap-5 flex-col px-10 py-5'>
      <h1 className='text-white text-5xl'>List</h1>
      <hr />
      <SubSection />
      <SubSection />
      <SubSection />
    </div>
  );
}
