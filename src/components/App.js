import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { counterLabelSelector, countState } from "../state/counter";
import Counter from "./counter";
import ReadOnly from "./readOnly";
import SelectorCount from "./selectorCount";
function App() {
  const counter = useRecoilValue(countState);
  return (
    <>
      <RecoilRoot>
        <SelectorCount />
      </RecoilRoot>
    </>
  );
}
export default App;
