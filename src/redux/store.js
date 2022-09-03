import { configureStore } from "@reduxjs/toolkit";
import youthReducer from "./reducers/youthReducer";

export const store = configureStore({
  reducer: {
    youthLists: youthReducer,
  },
});
