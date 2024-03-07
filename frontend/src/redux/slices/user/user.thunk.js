import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL } from "api.config.js";
import Cookies from "js-cookie";

export const readLocations = createAsyncThunk("user/readLocations", async () => {
  const res = await baseURL.get("/user/location");
  return res;
});

export const readUserProfile = createAsyncThunk(
  "user/readUserProfile",
  async (inputs, { rejectWithValue }) => {
    try {
      const res = await baseURL.get("/user/user-profile", inputs, {
        headers: { "X-CSRFToken": Cookies.get("csrftoken") },
      });
      console.log("THUNK USERPROFILE RES:", res);
      return res;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createUserProfile = createAsyncThunk(
  "user/createUserProfile",
  async (inputs, { rejectWithValue }) => {
    try {
      const res = await baseURL.post("/user/user-profile", inputs, {
        headers: { "X-CSRFToken": Cookies.get("csrftoken") },
      });
      console.log("CREATEUSEPROFILE THUNK:", res);
      return res;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateUserProfile = createAsyncThunk(
  "user/updateUserProfile",
  async (inputs, { rejectWithValue }) => {
    try {
      const res = await baseURL.put("/user/user-profile", inputs, {
        headers: { "X-CSRFToken": Cookies.get("csrftoken") },
      });
      console.log("RESSSSSSS: ", res);
      return res;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getUserProfileVerified = createAsyncThunk("user/getUserProfileVerified", async () => {
  const res = await baseURL.get("/user/user-profile-verified");
  // console.log("THUNK ISAUTH RES:", res);
  return res;
});
