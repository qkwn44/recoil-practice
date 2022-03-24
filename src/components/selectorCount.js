import { useRecoilValue, useRecoilState } from "recoil";
import { countState, inputState, countInputState } from "../state/counter";

function SelectorCount() {
  const [count, setCount] = useRecoilState(countState); //useRecoilState을 통한 value, setter 반환
  const [input, setInput] = useRecoilState(inputState); //useRecoilState을 통한 value, setter 반환
  const countInput = useRecoilValue(countInputState);
  return (
    <>
      <div>읽기 쓰기 카운트 컴포넌트</div>
      <p>카운트 {count}</p>
      <p>selector {countInput}</p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>숫자증가</button>
      <button onClick={() => setCount(count - 1)}>숫자감소</button>
    </>
  );
}

export default SelectorCount;
