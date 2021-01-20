import { put, takeLatest } from "redux-saga/effects";
import api from "services/api";
import { GET } from "utils/constants/verbs";
import { Types, Creators } from "store/ducks/enterprise";
import { FETCH_ENTERPRISES } from "utils/constants";

export function* getEnterprises() {
  try {
    const data = yield api({
      method: GET,
      url: FETCH_ENTERPRISES,
    });
    console.log(data);
    yield put(Creators.getEnterprisesSuccess(data));
  } catch (error) {
    yield put(Creators.getEnterprisesFailure(error));
  }
}

export function* watchSagas() {
  yield takeLatest(Types.GET_ENTERPRISES, getEnterprises);
}
