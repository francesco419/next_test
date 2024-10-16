'use client';

import { useRouter } from 'next/navigation';

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleOpenChange = () => {
    router.back();
    //modal창이 닫히게 되면 이전 url로 돌아갈수 있게 router.back()을 사용한다.
  };

  console.log('modal appear 1');

  return (
    <div
      onClick={handleOpenChange}
      className='fixed left-0 top-0 w-screen h-screen bg-slate-600'
    >
      {children}
    </div>
  );
}
