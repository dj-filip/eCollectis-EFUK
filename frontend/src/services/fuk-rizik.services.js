import { baseURL } from "api.config.js";
import Cookies from "js-cookie";

/**
 * @param {Object} id - id of wanted risk
 * @return {Object} - result of request for http get method  
 */
export const getRizik = async (id) => {
  try {
    const res = await baseURL.get(`/fuk-rizik/rizik/${id}/`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

/**
 * @param {Object} data - data for creation of new risk 
 * @return {Object} - result of request for http post method  
 */
export const postRizik = async (data) => {
  try {
    const res = await baseURL.post(`/fuk-rizik/rizik/1/`, data, {
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
  });
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

/**
 * @param {Object} id - id of wanted risk
 * @param {Object} data - data for creation of patch risk 
 * @return {Object} - result of request for http post method  
 */
export const patchRizik = async (id, data) => {
  try {
    console.log(data)
    const res = await baseURL.patch(`/fuk-rizik/rizik/${id}/`, data, {
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
  });
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

/**
 * @param {number} id - id of risk
 * @return {Object} - result of request for http delete method  
 */
export const deleteRizik = async (id) => {
  try {
    const res = await baseURL.delete(`/fuk-rizik/rizik/${id}/`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

// Operations on multiple objects

/**
 * @param {number} id - id of proces for wanted risks list
 * @return {Object} - result of request for http get method  
 */
 export const getRiziciByProcessId = async (id) => {
  try {
    const res = await baseURL.get(`/fuk-rizik/rizici/proces/${id}/`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

/**
 * @return {Object} - result of request for http get method  
 */
export const getRizici = async () => {
  try {
    const res = await baseURL.get(`/fuk-rizik/rizici/`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};
