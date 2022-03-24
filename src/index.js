import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { RecoilRoot } from "recoil"; //recoil 추가

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
