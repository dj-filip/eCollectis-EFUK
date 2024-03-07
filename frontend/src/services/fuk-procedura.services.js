import { baseURL } from "api.config.js";
import Cookies from "js-cookie";


export const getProcedura = async (id) => {
  try {
    const res = await baseURL.get(`/fuk-procedura/procedura/${id}/`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

export const postProcedura = async (data) => {
  try {
    const res = await baseURL.post(`/fuk-procedura/procedura/1/`, data, {
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

export const patchProcedura = async (id, data) => {
  try {
    const res = await baseURL.patch(`/fuk-procedura/procedura/${id}/`, data, {
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

export const deleteProcedura = async (id) => {
  try {
    const res = await baseURL.delete(`/fuk-procedura/procedura/${id}/`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

// Operations on multiple objects
export const getProcedure = async (id) => {
  try {
    const res = await baseURL.get(`/fuk-procedura/procedure/${id}/`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};
