'use client';

import inter1 from '@/interior/An Amazing Modern Residence by Studio David Thulstrup - Nordic Design.jpg';
import inter2 from '@/interior/Beautiful Interior Inspiration From An Elegant Residential Project In Sweden - Nordic Design.jpg';
import inter3 from '@/interior/carolineReichel.jpg';
import inter4 from '@/interior/Home Interiors.jpg';
import { useState } from 'react';
import ViewUp from './viewUp';

const interiorArray = [inter1, inter2, inter3, inter4];

export default function ViewGroup() {
  const [onClickBar, setOnClickBar] = useState<number>(0);

  const onClickHandler = (num: number) => {
    setOnClickBar((onClickBar) => num);
  };

  return (
    <>
      {interiorArray.map((o, index) => {
        return (
          <ViewUp
            interiorImage={o}
            key={o.src}
            handler={onClickHandler}
            handlerData={onClickBar}
            keyNumber={index + 1}
          />
        );
      })}
    </>
  );
}
