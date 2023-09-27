import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import GlobalStyled from "./styled/GlobalStyled";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyled />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
