import { createSlice } from "@reduxjs/toolkit";

export const testSlice = createSlice({
  name: "test",

  initialState: {
    initTest: "initial test"
  },

  reducers: {
    test1: state => {
      state.initTest = "test1"
    },
    test2: state => {
      state.initTest = "test2"
    }
  }
});

export const { test1, test2 } = testSlice.actions;

export default testSlice.reducer