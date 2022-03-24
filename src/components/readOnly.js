import { useRecoilValue } from "recoil";
import { countState } from "../state/counter";

/* atom을 읽기만 하는 컴포넌트 */

function ReadOnlyCount() {
  const count = useRecoilValue(countState); // 구독하는 atom의 값만 반환

  return (
    <>
      <h2>읽기 전용 컴포넌트</h2>
      <p>카운트 {count}</p>
    </>
  );
}

export default ReadOnlyCount;
