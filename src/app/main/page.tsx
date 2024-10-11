'use client';

import inter1 from '@/interior/An Amazing Modern Residence by Studio David Thulstrup - Nordic Design.jpg';
import inter2 from '@/interior/Beautiful Interior Inspiration From An Elegant Residential Project In Sweden - Nordic Design.jpg';
import inter3 from '@/interior/carolineReichel.jpg';
import inter4 from '@/interior/Home Interiors.jpg';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

const interiorArray = [inter1, inter2, inter3, inter4];

function SubSection({
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
        'overflow-hidden relative h-[64rem] min-w-0 rounded-xl opacity-50 hover:opacity-100 transition-[width , height , backgroundColor , border-radius] duration-500 ' +
        (handlerData === keyNumber ? 'w-[1500px]' : 'w-auto')
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
    </div>
  );
}

export default function Main() {
  const [onClickBar, setOnClickBar] = useState<number>(0);

  const onClickHandler = (num: number) => {
    setOnClickBar((onClickBar) => num);
  };

  return (
    <div className='flex gap-5 flex-col px-10 py-5 items-center'>
      {/* <h1 className='text-white text-5xl'>List</h1>
      <hr /> */}
      <div className='flex gap-5 justify-center max-w-5xl'>
        {interiorArray.map((o, index) => {
          return (
            <SubSection
              interiorImage={o}
              key={o.src}
              handler={onClickHandler}
              handlerData={onClickBar}
              keyNumber={index + 1}
            />
          );
        })}
      </div>
    </div>
  );
}
