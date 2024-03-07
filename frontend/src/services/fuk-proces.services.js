import { baseURL } from "api.config.js";
import Cookies from "js-cookie";

/**
 * @param {Object} id - id of wanted process
 * @return {Object} - result of request for http get method  
 */
export const getProces = async (id) => {
  try {
    const res = await baseURL.get(`/fuk-proces/proces/${id}/`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

/**
 * @param {Object} data - data for creation of new process 
 * @return {Object} - result of request for http post method  
 */
export const postProces = async (data) => {
  try {
    const res = await baseURL.post(`/fuk-proces/proces/1/`, data, {
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
 * @param {Object} data - data for creation of new process 
 * @return {Object} - result of request for http post method  
 */
export const patchProces = async (id, data) => {
  try {
    const res = await baseURL.patch(`/fuk-proces/proces/${id}/`, data, {
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
 * @param {number} id - id of process
 * @return {Object} - result of request for http delete method  
 */
export const deleteProces = async (id) => {
  try {
    const res = await baseURL.delete(`/fuk-proces/proces/${id}/`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

// Operations on multiple objects

/**
 * @param {number} id - id of oblast for wanted process' list
 * @return {Object} - result of request for http get method  
 */
export const getProcesiForOblast = async (id) => {
  try {
    const res = await baseURL.get(`/fuk-proces/procesi/${id}`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};


/**
 * @param {number} id - id of oblast for wanted process' list
 * @return {Object} - result of request for http get method  
 */
export const getProcesi = async (id) => {
  try {
    const res = await baseURL.get(`/fuk-proces/procesi/`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};