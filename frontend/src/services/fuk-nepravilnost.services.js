import { baseURL } from "api.config.js";
import Cookies from "js-cookie";

/**
 * @param {Object} id - id of wanted irregularity
 * @return {Object} - result of request for http get method  
 */
export const getNepravilnost = async (id) => {
  try {
    const res = await baseURL.get(`/fuk-nepravilnosti/nepravilnost/${id}/`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

/**
 * @param {Object} data - data for creation of new irregularity 
 * @return {Object} - result of request for http post method  
 */
export const postNepravilnost = async (data) => {
  try {
    const res = await baseURL.post(`/fuk-nepravilnosti/nepravilnost/`, data, {
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
export const patchNepravilnost = async (id, data) => {
  try {
    console.log(data)
    const res = await baseURL.patch(`/fuk-nepravilnosti/nepravilnost/${id}/`, data, {
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
export const deleteNepravilnost = async (id) => {
  try {
    const res = await baseURL.delete(`/fuk-nepravilnosti/nepravilnost/${id}/`);
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
 export const getNepravilnosti = async () => {
  try {
    const res = await baseURL.get(`/fuk-nepravilnosti/nepravilnosti/`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};