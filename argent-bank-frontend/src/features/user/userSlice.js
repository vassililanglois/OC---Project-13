import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: null,
  lastName: null,
  email: null,
  status: null,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
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
    resetUser: () => initialState,
  },
});

export const { setFirstName, setLastName, setEmail, resetUser } =
  userSlice.actions;
export default userSlice.reducer;
