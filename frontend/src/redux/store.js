import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "redux/root-reducer";
// import { baseApi } from "api/index.api";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      // immutableCheck: false,
    }),
});

export default store;
