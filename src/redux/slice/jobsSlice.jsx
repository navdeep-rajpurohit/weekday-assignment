import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API_URL from "../../utils/api";

export const fetchJobs = createAsyncThunk("fetchJobs", async () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({
    limit: 10,
    offset: 0,
  });
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body,
  };

  const res = await fetch(API_URL, requestOptions);

  return res?.json();
});

// For infinite scroll
export const fetchMoreJobs = createAsyncThunk("fetchJobs", async (page) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({
    // increasing the limit by 10 for every scroll
    limit: 10 + page,
    offset: 0,
  });
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body,
  };

  const res = await fetch(API_URL, requestOptions);

  return res?.json();
});

export const moreJobsSlice = createSlice({
  name: "jobs",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMoreJobs.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMoreJobs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.count = state.data.jdList.length;
    });
    builder.addCase(fetchMoreJobs.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchJobs.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchJobs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.count = state.data.jdList.length;
    });
    builder.addCase(fetchJobs.rejected, (state, action) => {
      state.isError = true;
    });
  },
});
