import { combineReducers } from "redux";
// import { baseApi } from "api/index.api";
import theme from "redux/slices/theme.slice";
import auth from "redux/slices/auth/auth.slice";
import accountStatus from "redux/slices/account-status/account-status.slice";
import role from "redux/slices/role/role.slice";
import user from "redux/slices/user/user.slice";
import test from "redux/slices/test/test.slice";

const rootReducer = combineReducers({
  theme,
  auth,
  accountStatus,
  role,
  user,
  test
  // [baseApi.reducerPath]: baseApi.reducer,
});

export default rootReducer;
