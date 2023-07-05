import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    handleClick: (state) => {
      state.auth = !state.auth;
    },
  },
});

export const { handleClick } = authSlice.actions;
export default authSlice.reducer;
