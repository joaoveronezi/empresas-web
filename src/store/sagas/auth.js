import { put, takeLatest, call } from "redux-saga/effects";
import api from "services/api";
import { POST } from "utils/constants/verbs";
import { AUTH_USER } from "utils/constants";
import { Types as AuthTypes, Creators as AuthActions } from "store/ducks/auth";
// import { removeClaims, AUTH_CLAIMS } from "helpers/auth";

function* setToken(claims) {
  yield call([localStorage, "setItem"], "token", JSON.stringify(claims));
}

export function* authorize({ payload }) {
  try {
    const { email, password } = payload;

    const { data } = yield api({
      method: POST,
      url: AUTH_USER,
      data: {
        email,
        password,
      },
    });

    yield setToken(data.investor.id);
    yield put(AuthActions.authSuccess(data));
  } catch (error) {
    yield put(AuthActions.authFailure(error));
  }
}

export function* watchSagas() {
  yield takeLatest(AuthTypes.AUTH_REQUEST, authorize);
}
