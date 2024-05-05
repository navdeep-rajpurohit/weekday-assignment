import { configureStore } from "@reduxjs/toolkit";
import { jobsSlice, moreJobsSlice } from "./slice/jobsSlice";

export const store = configureStore({
  reducer: {
    jobs: jobsSlice.reducer,
    moreJobs: moreJobsSlice.reducer
  },
});
