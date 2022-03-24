import { atom, selector } from "recoil";

export const countState = atom({
  key: "countState", // 해당 atom의 고유 key
  default: 0, //기본값
});
export const inputState = atom({
  key: "inputState",
  default: "",
});

/* 
selector
get을 이용해 state 가공 후 반환
해당 atom에 의존하는 selector도 자동 리렌더링
*/

export const countInputState = selector({
  key: "countTitleState",
  get: ({ get }) => {
    return `현재 카운트는 ${get(countState)} 이고 입력값은 ${get(
      inputState
    )} 입니다.`;
  },
});
