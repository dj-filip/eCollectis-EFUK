import { createSlice } from "@reduxjs/toolkit";

import { readRoles } from "redux/slices/role/role.thunk";

export const roleSlice = createSlice({
  name: "role",

  initialState: {
    roles: [],
  },

  reducers: {},

  extraReducers: {
    // [readRoles.fulfilled]: (state, action) => {
    //   console.log("GETROLES FULFILLED: ", action);
    //   state.roles = action.payload.data;
    // },
  },
});

export default roleSlice.reducer;
