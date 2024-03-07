import { createSlice } from "@reduxjs/toolkit";

import { getUserProfileVerified } from "redux/slices/user/user.thunk";

export const userSlice = createSlice({
  name: "user",

  initialState: {
    verified: "loading",
  },

  reducers: {
    // setUserProfile: (state, action) => {
    //   // state.commentReplies = state.commentReplies.filter(
    //   //   (commentReply) => commentReply._id === action.payload
    //   // );
    //   // setUserProfile((values) => ({ ...values, [e.target.id]: e.target.value }));
    //   state.userProfile = {
    //     ...state.userProfile,
    //     [action.payload.target.id]: action.payload.target.value,
    //   };
    //   // console.log("INPUTS: ", action.payload.target.id);
    //   console.log({ ...state.userProfile });
    // },
  },

  extraReducers: {
    [getUserProfileVerified.pending]: (state) => {
      state.verified = "loading";
    },
    [getUserProfileVerified.rejected]: (state) => {
      // state.verified = "unverified";
    },
    [getUserProfileVerified.fulfilled]: (state, action) => {
      state.verified = action.payload.data.verified ? "verified" : "unverified";
    },
  },
});

export const { setUserProfile } = userSlice.actions;

export default userSlice.reducer;
