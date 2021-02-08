import { put, takeLatest } from "redux-saga/effects";
import api from "services/api";
import { GET } from "utils/constants/verbs";
import { Types, Creators } from "store/ducks/enterprise";
import { FETCH_ENTERPRISE_BY_NAME } from "utils/constants";

export function* getEnterprisesByName({ name }) {
  console.log(name);
  try {
    const resp = yield api({
      method: GET,
      url: FETCH_ENTERPRISE_BY_NAME(name),
    });
    yield put(Creators.getEnterprisesSuccess(resp.data));
    console.log(resp);
  } catch (error) {
    yield put(Creators.getEnterprisesFailure(error));
  }
}

export function* watchSagas() {
  yield takeLatest(Types.GET_ENTERPRISES, getEnterprisesByName);
}
