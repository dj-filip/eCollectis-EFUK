import { createSlice } from "@reduxjs/toolkit";

import {
  readAccountStatus,
  createAccountStatus,
} from "redux/slices/account-status/account-status.thunk";

export const accountStatusSlice = createSlice({
  name: "accountStatus",

  initialState: {
    // verified: "loading",
    // role: "",
  },

  reducers: {},

  extraReducers: {
    // [readAccountStatus.pending]: (state) => {
    //   state.verified = "loading";
    // },
    // [readAccountStatus.rejected]: (state) => {
    //   // state.verified = "unverified";
    // },
    // [readAccountStatus.fulfilled]: (state, action) => {
    //   // console.log(action);
    //   state.verified = action.payload.data.account_status.verified ? "verified" : "unverified";
    //   // state.role = action.payload.data.account_status.user_role;
    // },
  },
});

export default accountStatusSlice.reducer;
