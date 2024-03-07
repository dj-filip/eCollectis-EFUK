import { baseURL } from "api.config.js";
// import Cookies from "js-cookie";

export const getUserVerified = async () => {
  const res = await baseURL.get("/user/user-profile-verified");
  return res;
};
