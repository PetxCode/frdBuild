import { configureStore } from "@reduxjs/toolkit";
import friendReducer from "./friendSlice";

export const store = configureStore({
  reducer: {
    friendReducer,
  },
});
