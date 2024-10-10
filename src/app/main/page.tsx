import inter from '@/interior/An Amazing Modern Residence by Studio David Thulstrup - Nordic Design.jpg';

function SubSection() {
  return (
    <div className='h-[64rem] rounded-xl bg-zinc-600 hover:bg-slate-300 transition duration-700 grow'>
      <div className='p-5 box-border'>
        <h1 className='text-3xl font-bold underline'></h1>
        <img
          src={
            '@/interior/An Amazing Modern Residence by Studio David Thulstrup - Nordic Design.jpg'
          }
        />
      </div>
    </div>
  );
}

export default function Main() {
  return (
    <div className='flex gap-5 flex-col px-10 py-5'>
      <h1 className='text-white text-5xl'>List</h1>
      <hr />
      <div className='flex gap-5'>
        <SubSection />
        <SubSection />
        <SubSection />
        <SubSection />
      </div>
    </div>
  );
}
