import { createSlice } from "@reduxjs/toolkit";
import { getDarkMode, setDarkMode } from "utils/theme.utils";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    darkMode: getDarkMode() || false,
  },
  reducers: {
    toggleMode: (state) => {
      const newMode = state.darkMode ? false : true;
      setDarkMode(newMode);
      state.darkMode = newMode;
    },
  },
});

export const { toggleMode } = themeSlice.actions;
export default themeSlice.reducer;
