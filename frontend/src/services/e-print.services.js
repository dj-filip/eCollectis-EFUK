import { baseURL } from "api.config.js";
import Cookies from "js-cookie";

/**
 * @param {Object} id - id of wanted activity
 * @return {Object} - result of request for http get method  
 */
export const getEprintProces = async (id) => {
  try {
    const res = await baseURL.get(`/fuk-aktivnost/aktivnost/${id}/`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};
