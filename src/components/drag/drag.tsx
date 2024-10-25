'use client';

import { useState } from 'react';
import DragSection from './dragSection';

const TEMP = [1, 2, 3, 4];
const NAME = ['first', 'second', 'third', 'fourth'];

export default function Drag() {
  return (
    <div className='bg-slate-400'>
      <div className='flex bg-stone-400 w-screen h-24 [&>*]:grow [&>*]:border-r-2'>
        {NAME.map((a) => {
          return <div key={`type_${a}`}>{a}</div>;
        })}
      </div>
      <div className='flex bg-slate-800 w-screen h-screen [&>*]:border-r-2'>
        {TEMP.map((a) => {
          return <DragSection num={a} key={`type_${a}`} />;
        })}
      </div>
    </div>
  );
}
