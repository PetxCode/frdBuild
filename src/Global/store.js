import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import socialReducer from "./social";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const persistedReducer = persistReducer(persistConfig, socialReducer);

export const store = configureStore({
  reducer: {
    counterReducer,
    persistedReducer,
  },
});
