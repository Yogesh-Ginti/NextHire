import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const app_id = import.meta.env.VITE_APP_ID
const app_key = import.meta.env.VITE_APP_KEY
export const fetchJobs = createAsyncThunk(
  'jobs/fetchJobs',
  async({cat,con, loc}, {rejectWithValue})=>{
    let url = `https://api.adzuna.com/v1/api/jobs/${con}/search/1?app_id=${app_id}&app_key=${app_key}&results_per_page=25&where=${loc}&category=${cat}`
    try {
      const res = await axios.get(url)
      return res.data.results;
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)


const jobsSlice = createSlice({
  name:'jobs',
  initialState:{
    status:'idle',
    jobs :[],
    error: null,
    location:''
  },
  reducers:{
    setLocation : (state,action)=>{
      state.location = action.payload
    },
    // setDepartment : (state,action)=>{
    //   state.department = action.payload
    // },
    // setTitle : (state,action)=>{
    //   state.title = action.payload
    // }
  },
  extraReducers:(builder)=>{
    builder
      .addCase(fetchJobs.pending, (state, action)=>{
        state.status = 'loading'
        state.error = null;
      })

      .addCase(fetchJobs.fulfilled, (state, action)=>{
        state.status = 'succeeded'
        state.jobs = action.payload
      })

      .addCase(fetchJobs.rejected, (state, action)=>{
        state.status = "failed"; // Set status to 'rejected' if fetch is rejected
        state.error = action.payload; // Store error message in state
      })
  }
})
export const{setLocation} = jobsSlice.actions
export default jobsSlice.reducer;