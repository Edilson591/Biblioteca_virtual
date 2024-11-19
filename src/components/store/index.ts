import { configureStore } from "@reduxjs/toolkit";
import booksApi from "../../services/booksApi";
import favoritosReducer from './reducers/favoritos'



export const store = configureStore({
    reducer: {
    favoritos: favoritosReducer,
    [booksApi.reducerPath]: booksApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(booksApi.middleware)},
)

export type RootReducer = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch