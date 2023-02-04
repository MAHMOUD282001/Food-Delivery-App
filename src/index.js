import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "./index.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./Store/Store";

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <Provider store={Store}>
      <App />
    </Provider>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
