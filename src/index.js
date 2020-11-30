import React from "react";
import ReactDOM from "react-dom";
import Login from "./containers/Login";

ReactDOM.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
  document.getElementById("root")
);

// import React from "react";
// import ReactDOM from "react-dom";

// import { Provider } from "react-redux";
// import { storeCreator } from "./store";

// import App from "./App";

// const componenteRaiz = document.getElementById("root");

// ReactDOM.render(
//   <Provider store={storeCreator}>
//     <App />
//   </Provider>,
//   componenteRaiz
// );
