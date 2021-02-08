/* eslint-disable */

const authPrefix = "auth";
const usersPrefix = "users";
const enterprisesPrefix = "enterprises";
const id = "id";

export const BASE_API = "https://empresas.ioasys.com.br";
export const AUTH_USER = `${usersPrefix}/${authPrefix}/sign_in`;
export const FETCH_ENTERPRISES = `${enterprisesPrefix}/`;
export const FETCH_ENTERPRISES_PAGE = `${enterprisesPrefix}/${id}`;
export const FETCH_ENTERPRISE_BY_NAME = (name) =>
  `${enterprisesPrefix}/?&name=${name}`;
