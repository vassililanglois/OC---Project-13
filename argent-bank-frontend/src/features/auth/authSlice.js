import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    status: null,
    error: null,
    isAuthenticated: false,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
      state.error = null;
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
    },
    setAuthError: (state, action) => {
      state.error = action.payload;
      state.isAuthenticated = false;
    },
  },
});

export const { setToken, logout, setAuthError } = authSlice.actions;
export default authSlice.reducer;
