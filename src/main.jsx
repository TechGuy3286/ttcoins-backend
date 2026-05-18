import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/dashboard.css";
import "./styles/buttons.css";
import "./styles/global.css";

import App from "./App";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);