import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    firstName: null,
    lastName: null,
    email: null,
    status: null,
    error: null,
  },
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
      state.error = null;
      state.status = "succeeded";
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
      state.error = null;
      state.status = "succeeded";
    },
    setEmail: (state, action) => {
      state.email = action.payload;
      state.error = null;
      state.status = "succeeded";
    },
  },
});

export const { setFirstName, setLastName, setEmail } = userSlice.actions;
export default userSlice.reducer;
