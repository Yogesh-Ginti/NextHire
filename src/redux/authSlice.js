import { createSlice } from '@reduxjs/toolkit';

// Check if there's a persisted user state in localStorage
const persistedIsUser = JSON.parse(localStorage.getItem('isUser')) || false;

// Initial state for form inputs
const initialState = {
  isUser: persistedIsUser,
  displayName : '',
  username: '',
  email: '',
  password: '',
  mobile: '',
};

// Slice for managing form inputs
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Reducer to set user display name
    setDisplayName : (state, action)=>{
      state.displayName = action.payload
    },
    // Reducer to set user
    setIsUser: (state, action) => {
      state.isUser = action.payload;
      localStorage.setItem('isUser', JSON.stringify(action.payload));  // Save to localStorage
    },
    // Reducer to set username
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    // Reducer to set email
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    // Reducer to set password
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    // Reducer to set mobile
    setMobile: (state, action) => {
      state.mobile = action.payload;
    },
    // Reducer to reset form inputs
    resetForm: (state) => {
      state.username = '';
      state.email = '';
      state.mobile = '';
      state.password = '';
    },
  },
});

// Exporting actions and reducer
export const { setIsUser,setDisplayName, setUsername, setEmail, setPassword, setMobile, resetForm } = authSlice.actions;
export default authSlice.reducer;
