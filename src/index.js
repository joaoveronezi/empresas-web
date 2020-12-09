import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import Login from "containers/Login";

import { store } from "./store";

const componenteRaiz = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <Login />
  </Provider>,
  componenteRaiz
);
