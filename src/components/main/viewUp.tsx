import Image, { StaticImageData } from 'next/image';

export default function ViewUp({
  interiorImage,
  handler,
  handlerData,
  keyNumber
}: {
  interiorImage: StaticImageData;
  handler: (num: number) => void;
  handlerData: number;
  keyNumber: number;
}) {
  return (
    <div
      className={
        'overflow-hidden relative h-[64rem] min-w-32 max-w-[1500px] rounded-xl opacity-50 hover:opacity-100 transition-[width , height , backgroundColor , border-radius] duration-1000 ' +
        (handlerData === keyNumber ? 'w-[1500px]' : 'w-72')
        //'grow-[2]' : 'grow-[0]') w-[1500px]
      }
    >
      <button
        onClick={() => handler(keyNumber)}
        className='absolute w-full h-full z-50'
      />
      <Image
        src={interiorImage}
        alt='interior img'
        className='max-w-none cursor-pointer'
      />
      <div
        className={
          'absolute bottom-5 left-5 flex transition duration-1000 w-max ' +
          (handlerData === keyNumber ? 'opacity-100' : 'opacity-0')
        }
      >
        <p className={'text-stone-50 text-3xl '}>{keyNumber} is picture</p>
        <button className={'text-pink-600 text-3xl ml-5'}> {'>'}</button>
      </div>
    </div>
  );
}