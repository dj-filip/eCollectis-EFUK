import axios from "axios";

var defaultBaseURL = "http://localhost:3000"; 
if (window.location.origin !== "http://localhost:3000")  {
    defaultBaseURL = window.location.origin
}

export const baseURL = axios.create({ baseURL: defaultBaseURL + "/api/v_1_0" });