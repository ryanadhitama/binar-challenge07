import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// IMPORT CSS
import "antd/dist/antd.min.css";
import "./assets/font/bootstrap-icons.css";
import "./assets/css/style.css";
import "swiper/css";

import App from "./App";
import store from "@app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
