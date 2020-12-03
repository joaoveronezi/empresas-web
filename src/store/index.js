/* eslint-disable */
import React from "react";
import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import Reducers from "./ducks";
import Sagas from "./sagas";

const storeCreator = () => {
  const sagaMiddleware = createSagaMiddleware();
  const reduxDevTools =
    typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

  const store = createStore(
    Reducers,
    reduxDevTools
      ? compose(applyMiddleware(sagaMiddleware), reduxDevTools)
      : compose(applyMiddleware(sagaMiddleware))
  );

  store.sagaTask = sagaMiddleware.run(Sagas);
  return store;
};

export default storeCreator;
