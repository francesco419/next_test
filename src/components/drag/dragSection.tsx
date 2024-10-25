import { useEffect, useState } from 'react';
import DragComponent from './dragComponent';
import { DragEvent } from 'react';

export default function DragSection({ num }: { num: number }) {
  const [show, setShow] = useState<boolean>(false);
  const [stack, setStack] = useState<string[]>([]);
  const [temp, setTemp] = useState<string>();
  const [between, setBetween] = useState<number[][]>([]);

  useEffect(() => {
    const ans = calculateBetweenBlock();
    setBetween((between) => ans);
  }, [stack]);

  const generateRandomString = (num: number) => {
    //랜덤 문자열 생성
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < num; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  };

  const calculateBetweenBlock = () => {
    let arr: number[][] = [];
    stack.forEach((stack, index) => {
      arr.push([160 * (index + 1), 160 * (index + 2)]);
    });

    return arr;
  };

  const stackAddHandler = () => {
    //컬럼의 스택 추가 - 랜덤 문자열 생성을 통해 고유 id생성
    const random = checkDuplication();
    setStack((stack) => [...stack, random]);
  };

  const checkDuplication = () => {
    //랜덤 문자열 생성 검증 함수
    let ran = generateRandomString(10);

    if (stack.indexOf(ran) === -1) {
      //문자열이 stack에 존재하지 않는다면 리턴
      return ran;
    } else {
      //이미 해당 문자열이 존재한다면 재귀방식으로 다시 실행
      return checkDuplication();
    }
  };

  const stackDeleteHandler = (id: string) => {
    //stack에서 해당 id가진 요소 삭제
    let arr = [...stack];
    arr.splice(stack.indexOf(id), 1);
    //stack에서 해당 id를 삭제,indexOf를 통해 위치를 찾아 삭제
    setStack((stack) => [...arr]);
  };

  const onDropHandler = (e: DragEvent<HTMLDivElement>) => {
    //드롭이 실행됬을시, 해당 드롭요소의 dataTransfer를 통해 id를 받아 stack에 저장
    e.preventDefault();
    //console.log(e.dataTransfer.getData('id'));
    setTemp((temp) => undefined);
    if (e.dataTransfer) {
      setStack((stack) => [...stack, e.dataTransfer.getData('id')]);
    }
  };

  return (
    <div
      className='hover:bg-slate-700 w-80'
      key={`type_${num}`}
      onMouseEnter={() => {
        setShow((show) => true);
      }}
      onMouseLeave={() => {
        setShow((show) => false);
      }}
      onDragOver={(e) => {
        e.preventDefault();
        setTemp((temp) => e.dataTransfer.getData('id'));
        console.log(e.clientY - 100);
      }}
      onDragLeave={() => {
        setTemp((temp) => undefined);
      }}
      onDrop={(e) => {
        onDropHandler(e);
      }}
    >
      {/* <button
        onClick={() => {
          console.log(stack);
        }}
      >
        check
      </button> */}
      {stack.map((o, index) => {
        return (
          <DragComponent data={o} func={stackDeleteHandler} key={`comp_${o}`} />
        );
      })}
      {temp !== undefined && (
        <DragComponent
          data={temp}
          func={stackDeleteHandler}
          key={`comp_${temp}`}
        />
      )}
      {show && (
        <div className='flex justify-center items-center w-full aspect-video bg-transparent bg-slate-600 hover:bg-slate-400 hover:[&>*]:bg-slate-300'>
          <button
            className='flex justify-center items-center rounded-full border-2 border-slate-50 w-10 h-10 text-slate-50 cursor-pointer'
            onClick={stackAddHandler}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}
