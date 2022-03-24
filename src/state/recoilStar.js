import { selector } from "recoil";

//비동기 처리 selector
export const recoilStarCountState = selector({
  key: "asyncState",
  get: async () => {
    const response = await fetch(
      "https://api.github.com/repos/facebookexperimental/Recoil"
    );

    console.log("response: ", response);

    const recoilProjectInfo = await response.json();

    console.log("recoilProjectInfo: ", recoilProjectInfo);
    // stargazers_count 반환
    return recoilProjectInfo["stargazers_count"];
  },
});
