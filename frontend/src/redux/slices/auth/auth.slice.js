import { createSlice } from "@reduxjs/toolkit";

import { getIsAuth, register, logIn, logOut } from "redux/slices/auth/auth.thunk";

export const authSlice = createSlice({
  name: "auth",

  initialState: {
    isAuth: "loading",
    registerPending: false,
    userRoles: [],
  },

  reducers: {
    // auth: (state, action) => {
    //   localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
    //   return { authData: action.payload };
    // },
  },

  extraReducers: {
    [getIsAuth.pending]: (state, action) => {
      // console.log(action);
      state.isAuth = "loading";
    },
    [getIsAuth.rejected]: (state, action) => {
      // console.log("ISAUTH REJECTED: ", action);
      // state.isAuth = "logged out";
    },
    [getIsAuth.fulfilled]: (state, action) => {
      // console.log("ISAUTH FULFILLED: ", action);
      state.userRoles = action.payload.data.user_roles;
      state.isAuth = action.payload.data.is_auth ? "logged in" : "logged out";
    },

    [register.pending]: (state, action) => {
      // console.log(action);
      state.registerPending = true;
    },
    [register.rejected]: (state, action) => {
      // console.log(action);
      // state.isAuth = "logged out";
      state.registerPending = false;
    },
    [register.fulfilled]: (state, action) => {
      console.log("REGISTER FULFILLED: ", action);
      // state.isAuth = "logged in";
      state.registerPending = false;
    },

    [logIn.pending]: (state, action) => {
      // console.log(action);
      // state.isAuth = "loading";
    },
    [logIn.rejected]: (state, action) => {
      // console.log("LOGIN REJECTED: ", action);
      // state.isAuth = "logged out";
    },
    [logIn.fulfilled]: (state, action) => {
      // console.log("LOGIN FULFILLED: ", action);
      state.isAuth = "logged in";
    },

    [logOut.pending]: (state, action) => {
      // console.log(action);
      // state.isAuth = "loading";
    },
    [logOut.fulfilled]: (state, action) => {
      // console.log(action);
      state.isAuth = "logged out";
    },
    [logOut.rejected]: (state, action) => {
      // console.log(action);
      // state.isAuth = "logged in";
    },
  },
});

// export const { auth } = authSlice.actions;

export default authSlice.reducer;
