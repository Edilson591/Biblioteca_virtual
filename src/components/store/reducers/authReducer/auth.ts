import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthUser, inicialAuthState } from "./interfaceAuth";

const inicialState: inicialAuthState = {
  isAuthenticated: !!localStorage.getItem("user"),
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") || "{}").user
    : null,
};

const authSlice = createSlice({
  name: "authBooks",
  initialState: inicialState,
  reducers: {
    login: (state, action: PayloadAction<AuthUser>) => {
      state.isAuthenticated = true;
      state.user = action.payload;

      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;

      localStorage.removeItem("user");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
