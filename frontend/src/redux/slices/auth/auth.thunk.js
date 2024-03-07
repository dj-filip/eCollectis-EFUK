import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL } from "api.config.js";
import Cookies from "js-cookie";

export const getIsAuth = createAsyncThunk("auth/getIsAuth", async () => {
  const res = await baseURL.get("/user/authentication");
  // console.log("THUNK ISAUTH RES:", res);
  return res;
});

export const register = createAsyncThunk("auth/register", async (inputs, { rejectWithValue }) => {
  try {
    const res = await baseURL.post("/user/register", inputs, {
      headers: { "X-CSRFToken": Cookies.get("csrftoken") },
    });
    return res;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const logIn = createAsyncThunk("auth/logIn", async (inputs, { rejectWithValue }) => {
  try {
    const res = await baseURL.post("/user/login", inputs, {
      headers: { "X-CSRFToken": Cookies.get("csrftoken") },
    });
    console.log("THUNK LOGIN RES:", res);
    return res;
  } catch (error) {
    console.log("LOGIN ERROR: ", error);
    return rejectWithValue(error.response.data);
  }
});

export const logOut = createAsyncThunk("auth/logOut", async (_, { rejectWithValue }) => {
  // return await baseURL.post("/user/logout", {
  //   headers: { "X-CSRFToken": Cookies.get("csrftoken") },
  // });

  try {
    const res = await baseURL.post("/user/logout", _, {
      headers: { "X-CSRFToken": Cookies.get("csrftoken") },
    });
    console.log("RESSSSSSS: ", res);
    return res;
  } catch (error) {
    console.log("ERRRORRRR: ", error.response.data);
    return rejectWithValue(error.response.data);
  }
});
