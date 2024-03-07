import { baseURL } from "api.config.js";
import Cookies from "js-cookie";


// Operations on single objects
export const getOblast = async (id) => {
    try {
      const res = await baseURL.get(`/fuk-oblast/oblast/${id}/`);
      return res;
    } catch (error) {
      console.log("SERVICE ERROR: ", error);
    }
  };

export const postOblast = async (data) => {
  try {
    const res = await baseURL.post(`/fuk-oblast/oblast/1/`, data, {
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

export const patchOblast = async (id, data) => {
  try {
    const res = await baseURL.patch(`/fuk-oblast/oblast/${id}/`, data, {
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

export const deleteOblast = async (id) => {
  try {
    const res = await baseURL.delete(`/fuk-oblast/oblast/${id}/`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};

// Operations on multiple objects
export const getOblasti = async () => {
  try {
    const res = await baseURL.get(`/fuk-oblast/oblasti/`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};
