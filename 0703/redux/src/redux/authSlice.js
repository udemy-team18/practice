import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    handleClick: (state) => {
      state.auth = !state.auth;
    },
  },
});

export const { handleClick } = AuthSlice.actions;
export default AuthSlice.reducer;
