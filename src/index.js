import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Routes from "routes";
import { store } from "./store";

const componenteRaiz = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  componenteRaiz
);
