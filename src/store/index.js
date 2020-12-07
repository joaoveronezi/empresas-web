/* eslint-disable */
import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import Reducers from "./ducks";
import Sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const reduxDevTools =
  typeof window !== "undefined" &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(
  Reducers,
  reduxDevTools
    ? compose(applyMiddleware(sagaMiddleware), reduxDevTools)
    : compose(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(Sagas);
