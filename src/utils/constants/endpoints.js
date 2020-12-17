/* eslint-disable */

const authPrefix = "auth";
const usersPrefix = "users";
const enterprisesPrefix = "enterprises";
const id = "id";
const enterpriseName = "enterpriseName";

export const AUTH_USER = `${usersPrefix}/${authPrefix}/sign_in`;
export const FETCH_ENTERPRISES = `${enterprisesPrefix}/`;
export const FETCH_ENTERPRISES_PAGE = `${enterprisesPrefix}/${id}`;
export const FETCH_ENTERPRISES_BY_ID = `${enterprisesPrefix}?enterprise_types=${id}&name=${enterpriseName}`;
