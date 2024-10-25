export default function DragComponent({
  data,
  func
}: {
  data: string;
  func: (id: string) => void;
}) {
  return (
    <div
      key={data}
      className='flex justify-center items-center w-80 aspect-video bg-transparent bg-slate-900 box-border border-2 gap-2'
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData('id', data);
      }}
      onDrag={(e) => {
        e.preventDefault();
        //e.currentTarget.style.display = 'none';
      }}
      onDragEnd={(e) => {
        //e.currentTarget.style.display = 'block';
        func(data);
      }}
    >
      <h2 className='flex justify-center items-center rounded-full border-2 border-slate-50 w-10 h-10 text-slate-50'>
        {data}
      </h2>
      <button
        className='flex justify-center items-center rounded-full border-2 border-slate-50 w-10 h-10 text-slate-50 cursor-pointer'
        onClick={() => func(data)}
      >
        -
      </button>
    </div>
  );
}

/**
 * 개발중 치명적인 오류 발생.
 * onDrag, 드래그 중에는 원래 요소블록이 안보이도록
 * e.currentTarget.style.display = 'none';를 사용해 보았다.
 *
 * 여기서 생기는 문제는 브라우저에 직접적인 영향을 주는것으로 보이는데,
 * 해당 코드를 적용하고 드래그를 하게되면, e.dataTransfer의 기능이 마비된 듯이 전혀 작동하지 않는다.
 * 뿐만이 아니라, 전체적인 드래그 및 연계 기능들에 오류가 발생. vsc를 재실행 해도 문제가 해결되지 않아
 * 브라우저를 재실행 하니 해당 문제가 해결.
 */
