import { baseURL } from "api.config.js";
import Cookies from "js-cookie";

/**
 * @param {Object} id - id of wanted activity
 * @return {Object} - result of request for http get method  
 */
export const getAktivnost = async (id) => {
  try {
    const res = await baseURL.get(`/fuk-aktivnost/aktivnost/${id}/`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

/**
 * @param {Object} data - data for creation of new activity 
 * @return {Object} - result of request for http post method  
 */
export const postAktivnost = async (data) => {
  try {
    const res = await baseURL.post(`/fuk-aktivnost/aktivnost/`, data, {
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
 * @param {number} id - id of activity
 * @return {Object} - result of request for http delete method  
 */
export const deleteAktivnost = async (id) => {
  try {
    const res = await baseURL.delete(`/fuk-activity/activity/${id}/`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

// Operations on multiple objects

/**
 * @param {number} procesId - id of proces for wanted activities list
 * @param {number} proceduraId - id of procedura for wanted activities list
 * @return {Object} - result of request for http get method  
 */
export const getAktivnosti = async (procesId, proceduraId) => {
  try {
    const res = await baseURL.get(`/fuk-aktivnost/aktivnosti/${procesId}/${proceduraId}/`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

/**
 * @param {number} procesId - id of proces for wanted activities list
 * @param {number} proceduraId - id of procedura for wanted activities list
 * @param {Object} data - data to be sent
 * @return {Object} - result of request for http get method  
 */
export const postAktivnosti = async (procesId, proceduraId, data) => {
  try {
    const res = await baseURL.post(`/fuk-aktivnost/aktivnosti/${procesId}/${proceduraId}/`, data, {
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
 * @param {number} procesId - id of proces for wanted activities list
 * @param {number} proceduraId - id of procedura for wanted activities list
 * @return {Object} - result of request for http get method  
 */
export const deleteAktivnosti = async (procesId, proceduraId) => {
  try {
    const res = await baseURL.delete(`/fuk-aktivnost/aktivnosti/${procesId}/${proceduraId}/`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};
