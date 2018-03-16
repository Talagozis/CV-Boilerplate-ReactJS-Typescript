import * as React from "react";
import * as ReactDOM from "react-dom";
import CV from "./Components/CV/CV";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

ReactDOM.render(
  <CV />,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
