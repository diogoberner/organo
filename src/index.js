import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TeamProvider } from "./context/TeamContext.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TeamProvider>
      <App />
    </TeamProvider>
  </React.StrictMode>
);
