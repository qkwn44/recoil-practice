import React, { useState } from "react";
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";
import { countState, inputState } from "../state/counter";

const Counter = () => {
  const [count, setCount] = useRecoilState(countState); //useRecoilState을 통한 value, setter  반환
  const setCountUseSetRecoilState = useSetRecoilState(countState); // 값을 변경하는 함수만 반환
  const resetCount = useResetRecoilState(countState); // 설정된 기본값으로 리셋

  return (
    <div>
      <h3>읽기 쓰기 카운트 컴퍼넌트</h3>
      <p>카운트 {count}</p>
      <br />
      <button onClick={() => setCount(count + 1)}>숫자증가</button>
      <button onClick={() => setCount(count - 1)}>숫자감소</button>
      <br />
      <button onClick={() => setCountUseSetRecoilState(count + 1)}>
        숫자증가(useSetRecoilState 사용)
      </button>
      <button onClick={() => setCountUseSetRecoilState(count - 1)}>
        숫자감소(useSetRecoilState 사용)
      </button>
      <button onClick={resetCount}>reset</button>
    </div>
  );
};

export default Counter;
