import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token");

const initialState = {
  token: token || null,
  status: null,
  error: null,
  isAuthenticated: !!token,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
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
      localStorage.removeItem("token");
    },
    setAuthError: (state, action) => {
      state.error = action.payload;
      state.isAuthenticated = false;
    },
  },
});

export const { setToken, logout, setAuthError } = authSlice.actions;
export default authSlice.reducer;
