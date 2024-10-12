import ViewGroup from '@/components/main/viewGroup';

export default function Main() {
  return (
    <div className='flex gap-5 flex-col px-10 py-5 items-center'>
      <div className='flex gap-5 justify-center max-w-5xl'>
        <ViewGroup />
      </div>
    </div>
  );
}

/* 
클릭시 이미지 사이드 슬라이드
화장된 ui에서 2가지 선택 
- 1. 모달창을 통해 간단한 정보를 표현 ( 상세페이지 링크 포함 )                        
- 2. 상세 페이지 링크 버튼 (컴포넌트 구현 ## )
(컴포넌트 구현 ## )
(모달창 구편 ## -> @modal + (..))
*/
