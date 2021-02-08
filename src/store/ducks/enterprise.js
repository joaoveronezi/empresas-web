import { createActions, createReducer } from "reduxsauce";

import {
  REQUEST_PENDING,
  REQUEST_SUCCESS,
  REQUEST_FAILURE,
  REQUEST_NOT_STARTED,
} from "utils/constants";

export const { Types, Creators } = createActions({
  getEnterprises: ["name"],
  getEnterprisesSuccess: ["payload"],
  getEnterprisesFailure: ["error, payload"],
  cleanState: null,
});

const INITIAL_STATE = {
  enterprises: [],
  fetchEnterprises: REQUEST_NOT_STARTED,
};

const getEnterprises = () => ({
  ...INITIAL_STATE,
  fetchEnterprises: REQUEST_PENDING,
});

const getEnterprisesSuccess = (state, { payload }) => {
  console.log("DUCK SUCCESS", payload);
  return {
    ...state,
    enterprises: payload,
    fetchEnterprises: REQUEST_SUCCESS,
  };
};

const getEnterprisesFailure = (state, { error }) => {
  console.log("ERRO->", error);

  return {
    ...state,
    error,
    fetchEnterprises: REQUEST_FAILURE,
  };
};
const cleanState = () => ({ ...INITIAL_STATE });

export default createReducer(INITIAL_STATE, {
  [Types.GET_ENTERPRISES]: getEnterprises,
  [Types.GET_ENTERPRISES_SUCCESS]: getEnterprisesSuccess,
  [Types.GET_ENTERPRISES_FAILURE]: getEnterprisesFailure,
  [Types.CLEAN_STATE]: cleanState,
});
