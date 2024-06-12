import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <div>-102--021-021--021-02-10</div>
        <div>-102--021-021--021-02-10</div>
        <div>-102--021-021--021-02-10</div>
        <div>-102--021-021--021-02-10</div>
        <div>-102--021-021--021-02-10</div>
        <div>-102--021-021--021-02-10</div>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
