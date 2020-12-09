import { createActions, createReducer } from "reduxsauce";
// import { isAuthenticated, getAuthClaims } from "helpers/auth";
import {
  REQUEST_PENDING,
  REQUEST_SUCCESS,
  REQUEST_FAILURE,
  REQUEST_NOT_STARTED,
} from "utils/constants";

export const { Types, Creators } = createActions({
  authRequest: ["payload"],
  authSuccess: ["payload"],
  authFailure: ["error"],
});

const INITIAL_STATE = {
  isAuthenticated: JSON.parse(localStorage.getItem("token")) !== null,
  token: localStorage.getItem("token"),
  authRequest: REQUEST_NOT_STARTED,
};

const authRequest = () => ({
  ...INITIAL_STATE,
  authRequest: REQUEST_PENDING,
});

const authSuccess = (state, { payload }) => {
  console.log(payload);

  return {
    ...state,
    token: payload,
    isAuthenticated: !!payload,
    authSuccess: REQUEST_SUCCESS,
  };
};

const authFailure = (state, { payload }) => ({
  ...state,
  error: payload,
  authFailure: REQUEST_FAILURE,
});

export default createReducer(INITIAL_STATE, {
  [Types.AUTH_REQUEST]: authRequest,
  [Types.AUTH_SUCCESS]: authSuccess,
  [Types.AUTH_FAILURE]: authFailure,
});
