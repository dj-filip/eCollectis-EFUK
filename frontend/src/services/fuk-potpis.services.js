import { baseURL } from "api.config.js";
import Cookies from "js-cookie";

/**
 * @param {Object} id - id of wanted document
 * @param {Object} type- type of wanted document (1 - process, 2 - procedure)
 * 
 * @return {Object} - result of request for http get method  
 */
 export const getPotpisiByDocumentIdAndType = async (id, type) => {
  try {
    const res = await baseURL.get(`/fuk-potpis/potpisi/id/${id}/type/${type}/`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

export const postPotpisi = async (data) => {
  try {
    const res = await baseURL.post(`/fuk-potpis/potpisi/`, data, {
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

export const postPotpis = async (data) => {
  try {
    const res = await baseURL.post(`/fuk-potpis/potpis/`, data, {
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

export const patchPotpis = async (id, data) => {
  try {
    const res = await baseURL.patch(`/fuk-potpis/potpis/${id}/`, data, {
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

export const patchPotpisi = async (data) => {
  try {
    const res = await baseURL.patch(`/fuk-potpis/potpisi/`, data, {
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