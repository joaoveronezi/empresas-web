import { createActions, createReducer } from "reduxsauce";

import {
  REQUEST_PENDING,
  REQUEST_SUCCESS,
  REQUEST_FAILURE,
  REQUEST_NOT_STARTED,
} from "utils/constants";

export const { Types, Creators } = createActions({
  getEnterprises: null,
  getEnterprisesSuccess: ["payload"],
  getEnterprisesFailure: ["error, payload"],
});

const INITIAL_STATE = {
  enterprises: [],
  fetchEnterprises: REQUEST_NOT_STARTED,
};

const getEnterprises = () => {
  console.log("DUCK");

  return {
    ...INITIAL_STATE,
    fetchEnterprises: REQUEST_PENDING,
  };
};

const getEnterprisesSuccess = (state, { payload }) => {
  console.log("DUCK SUCCESS");
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

export default createReducer(INITIAL_STATE, {
  [Types.GET_ENTERPRISES]: getEnterprises,
  [Types.GET_ENTERPRISES_SUCCESS]: getEnterprisesSuccess,
  [Types.GET_ENTERPRISES_FAILURE]: getEnterprisesFailure,
});
