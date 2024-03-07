import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL } from "api.config.js";

export const readRoles = createAsyncThunk("roles/readRoles", async () => {
  const res = await baseURL.get("/role/role");
  return res;
});
