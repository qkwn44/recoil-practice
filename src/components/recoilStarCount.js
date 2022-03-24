import React from "react";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { recoilStarCountState } from "../state/recoilStar";

function RecoilStarCount() {
  const recoilStarCount = useRecoilValueLoadable(recoilStarCountState);

  if (recoilStarCount.state === "loading") {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div>
        <p>recoil github star 갯수</p>
        <p>{recoilStarCount.contents}</p>
      </div>
    </>
  );
}

export default RecoilStarCount;
