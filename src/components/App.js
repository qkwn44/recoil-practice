import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { counterLabelSelector, countState } from "../state/counter";
import RecoilStarCount from "./recoilStarCount";
function App() {
  const counter = useRecoilValue(countState);
  return (
    <>
      <React.Suspense fallback={<div>로딩중입니다.</div>}>
        <RecoilStarCount />
      </React.Suspense>
    </>
  );
}
export default App;
