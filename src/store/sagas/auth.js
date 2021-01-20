import { put, takeLatest, call } from "redux-saga/effects";
import api from "services/api";
import { POST } from "utils/constants/verbs";
import { AUTH_USER } from "utils/constants";
import { Types as AuthTypes, Creators as AuthActions } from "store/ducks/auth";
import { LOCAL_STORAGE } from "services/auth";

function* setToken(data) {
  yield call([localStorage, "setItem"], LOCAL_STORAGE, JSON.stringify(data));
}

export function* authorize({ payload }) {
  try {
    const { email, password } = payload;

    const resp = yield api({
      method: POST,
      url: AUTH_USER,
      data: {
        email,
        password,
      },
    });
    console.log(resp);
    yield setToken(resp.headers);
    yield put(AuthActions.authSuccess(resp.data));
  } catch (error) {
    yield put(AuthActions.authFailure(error));
  }
}

export function* watchSagas() {
  yield takeLatest(AuthTypes.AUTH_REQUEST, authorize);
}
