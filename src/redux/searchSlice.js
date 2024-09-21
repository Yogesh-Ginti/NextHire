import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const app_id = import.meta.env.VITE_APP_ID
const app_key = import.meta.env.VITE_APP_KEY
export const fetchSearchJobs = createAsyncThunk(
  'jobs/fetchSearchJobs',
  async({title, location,}, {rejectWithValue})=>{
    let url = `https://api.adzuna.com/v1/api/jobs/in/search/1?app_id=${app_id}&app_key=${app_key}&results_per_page=25&what=${title}`
    if(location) url = `https://api.adzuna.com/v1/api/jobs/in/search/1?app_id=${app_id}&app_key=${app_key}&results_per_page=25&where=${location}`
    if(title && location) url = `https://api.adzuna.com/v1/api/jobs/in/search/1?app_id=${app_id}&app_key=${app_key}&results_per_page=25&what=${title}&where=${location}`
    try {
      const res = await axios.get(url)
      console.log(res.data.results)
      return res.data.results;
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)


const searchJobsSlice = createSlice({
  name:'searchJobs',
  initialState:{
    status:'idle',
    searchJobs :[],
    error: null,
    title:'',
    location:'',
  },
  reducers:{
    setLocation : (state,action)=>{
      state.location = action.payload
    },
    setTitle : (state,action)=>{
      state.title = action.payload
    }
  },
  extraReducers:(builder)=>{
    builder
      .addCase(fetchSearchJobs.pending, (state, action)=>{
        state.status = 'loading'
        state.error = null;
      })

      .addCase(fetchSearchJobs.fulfilled, (state, action)=>{
        state.status = 'succeeded'
        state.searchJobs = action.payload
      })

      .addCase(fetchSearchJobs.rejected, (state, action)=>{
        state.status = "failed"; // Set status to 'rejected' if fetch is rejected
        state.error = action.payload; // Store error message in state
      })
  }
})
export const{setLocation, setTitle} = searchJobsSlice.actions
export default searchJobsSlice.reducer;