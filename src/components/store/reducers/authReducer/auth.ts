import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { inicialAuthState, User } from "./interfaceAuth";

const inicialState: inicialAuthState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "authBooks",
  initialState: inicialState,
  reducers: {
    login: (state, action:PayloadAction<User>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
