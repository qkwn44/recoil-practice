import React from "react";
import { useRecoilValue } from "recoil";
import { recoilStarCountState } from "../state/recoilStar";

function RecoilStarCount() {
  const recoilStarCount = useRecoilValue(recoilStarCountState);

  /* 
 비동기통신을 사용하기 위해선 
 해당 컴포넌트를 Suspense로 비동기상태에 대한 처리 진행
 */
  return (
    <>
      <p>recoil github star 갯수</p>
      <p>{recoilStarCount}</p>
    </>
  );
}

export default RecoilStarCount;
