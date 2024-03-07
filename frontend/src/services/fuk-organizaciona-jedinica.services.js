import { baseURL } from "api.config.js";
import Cookies from "js-cookie";


export const getOrganizacioneJedinice = async () => {
  try {
    const res = await baseURL.get(`/fuk-orgjed/organizacione-jedinice/`);
    return res;
  } catch (error) {
    console.log("SERVICE ERROR: ", error);
  }
};
