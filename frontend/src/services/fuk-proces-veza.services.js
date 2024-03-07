import { baseURL } from "api.config.js";
import Cookies from "js-cookie";

/**
 * @param {Object} id - id of wanted process
 * @return {Object} - result of request for http get method  
 */
export const getProcesVeza = async (id) => {
  try {
    const res = await baseURL.get(`/fuk-proces-veza/proces-veza/${id}/`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

/**
 * @param {Object} data - data for creation of new process 
 * @return {Object} - result of request for http post method  
 */
export const postProcesVeza = async (data) => {
  try {
    const res = await baseURL.post(`/fuk-proces-veza/proces-veza/1/`, data, {
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
 * @param {Object} id - id of wanted process
 * @param {Object} data - data for creation of new process 
 * @return {Object} - result of request for http post method  
 */
 export const patchProcesVeza = async (id, data) => {
  try {
    const res = await baseURL.patch(`/fuk-proces-veza/proces-veza/${id}/`, data, {
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
export const deleteProcesVeza = async (id) => {
  try {
    const res = await baseURL.delete(`/fuk-proces-veza/proces-veza/${id}/`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

/**
 * @param {Object} id - id of wanted process
 * @return {Object} - result of request for http get method  
 */
export const getProcesVezaByProcessId = async (id) => {
  try {
    const res = await baseURL.get(`/fuk-proces-veza/proces-veze/process-id/${id}/`);
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
export const getProcesVeze = async (id) => {
  try {
    const res = await baseURL.get(`/fuk-proces-veza/proces-veze/${id}/`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

/**
 * @param {Array} data - data to be updated
 * @return {Object} - result of request for http get method  
 */
export const postProcesVeze = async (data) => {
  try {
    const res = await baseURL.post(`/fuk-proces-veza/proces-veze/`, data, {
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
 * @param {Array} data - data to be updated
 * @return {Object} - result of request for http get method  
 */
export const patchProcesVeze = async (data) => {
  try {
    const res = await baseURL.patch(`/fuk-proces-veza/proces-veze/`, data, {
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
