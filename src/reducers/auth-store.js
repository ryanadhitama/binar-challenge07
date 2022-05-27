import { createSlice } from "@reduxjs/toolkit";

export const authStore = createSlice({
  name: "authStore",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    setIsLogin: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setIsLogin } = authStore.actions;

export default authStore.reducer;
