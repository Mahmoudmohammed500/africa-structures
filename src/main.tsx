import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./i18n";
import "./styles/index.css";
import InitialLoader from "./components/common/InitialLoader/InitialLoader";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
     <InitialLoader />
    <App />
  </React.StrictMode>
);