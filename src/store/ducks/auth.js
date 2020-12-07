import { createActions, createReducer } from "reduxsauce";
import {
  REQUEST_PENDING,
  REQUEST_SUCCESS,
  REQUEST_FAILURE,
} from "utils/constants";

export const { Types, Creators } = createActions({
  authRequest: ["payload"],
  authSuccess: ["payload"],
  authFailure: ["error"],
});

const INITIAL_STATE = {
  token: localStorage.getItem("token"),
  error: null,
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
