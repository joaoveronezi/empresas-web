import { all } from "redux-saga/effects";
import * as authSagas from "./auth";
import * as enterpriseSagas from "./enterprise";

function* sagas() {
  yield all([authSagas.watchSagas(), enterpriseSagas.watchSagas()]);
}

export default sagas;
