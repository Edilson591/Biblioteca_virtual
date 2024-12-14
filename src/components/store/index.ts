import { configureStore } from "@reduxjs/toolkit";
import booksApi from "../../services/apiBooks/booksApi";
import favoritosReducer from "./reducers/favoritos";
import authReducer from "./reducers/authReducer/auth";
import usersApi from "../../services/apiUsers/apiUsers";

export const store = configureStore({
  reducer: {
    favoritos: favoritosReducer,
    authBooksUser: authReducer,
    [booksApi.reducerPath]: booksApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware, usersApi.middleware),
});

export type RootReducer = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
