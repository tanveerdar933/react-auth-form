import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    roles: null,
    token: null
  },
  reducers: {
    setCredentials: (state, action) => {
      const { user, roles, accessToken } = action.payload;
      state.user = user;
      state.roles = roles;
      state.token = accessToken;
    },
    logOut: (state) => {
      state.user = null;
      state.roles = null;
      state.token = null;
    }
  }
})

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
export const selectCurrentUserRoles = (state) => state.auth.roles;