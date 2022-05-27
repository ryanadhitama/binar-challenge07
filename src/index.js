import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";

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
    <GoogleOAuthProvider clientId="633984106873-0lfjhm13d66d3t0e74vvr3ap9j7k16a5.apps.googleusercontent.com">
      <Provider store={store}>
        <App />
      </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
