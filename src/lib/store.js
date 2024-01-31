import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./slices/TaskSlice";

//store
export const store = configureStore({
  reducer: {
    taskSlice: taskReducer,
  },
});
