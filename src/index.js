import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { store } from "./store";

import Login from "./containers/Login";

const componenteRaiz = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <Login />
  </Provider>,
  componenteRaiz
);
