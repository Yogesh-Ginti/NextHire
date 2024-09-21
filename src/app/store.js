import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "../redux/jobsSlice";
import authReducer from "../redux/authSlice";
import searchJobsReducer from "../redux/searchSlice";

export const store = configureStore({
  reducer:{
    jobs : jobsReducer,
    auth : authReducer,
    searchJobs: searchJobsReducer
  }
}) 