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
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        height: '1000px',
        width: '1000px',
        backgroundColor: '#ff0000'
      }}
    >
      {children}
    </div>
  );
}
