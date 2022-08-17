import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Providers from "./Providers";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);
