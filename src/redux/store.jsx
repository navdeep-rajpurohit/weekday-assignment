import { configureStore } from "@reduxjs/toolkit";
import { jobsSlice } from "./slice/jobsSlice";

export const store = configureStore({
  reducer: {
    jobs: jobsSlice.reducer,
  },
});
