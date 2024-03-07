import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL } from "api.config.js";
import Cookies from "js-cookie";

export const readAccountStatus = createAsyncThunk("accountStatus/readAccountStatus", async () => {
  const res = await baseURL.get("/account-status/account-status");
  // console.log("VERIFIED: ", res);
  return res;
});

export const createAccountStatus = createAsyncThunk(
  "accountStatus/createAccountStatus",
  // async (inputs) => {
  //   const res = await baseURL.post("/account-status/account-status", inputs, {
  //     headers: { "X-CSRFToken": Cookies.get("csrftoken") },
  //   });
  //   return res;
  // }

  async (inputs, { rejectWithValue }) => {
    try {
      const res = await baseURL.post("/account-status/account-status", inputs, {
        headers: { "X-CSRFToken": Cookies.get("csrftoken") },
      });
      console.log("CREATEACCOUNTSTATUS THUNK:", res);
      return res;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
