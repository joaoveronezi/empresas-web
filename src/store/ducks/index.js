import { combineReducers } from "redux";
import auth from "./auth";
import enterprise from "./enterprise";

export default combineReducers({
  auth,
  enterprise,
});
