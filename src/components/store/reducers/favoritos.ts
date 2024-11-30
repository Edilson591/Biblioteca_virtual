import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Books } from "../../../services/interfaceBooks";

const storedFavorite = JSON.parse(localStorage.getItem("favorites") || "[]")

interface FavoritosBooks {
  book: Books[];
}

const inicialState: FavoritosBooks = {
  book: storedFavorite,
};

 
const favoritoSlice = createSlice({
  name: "favoritos",
  initialState: inicialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Books>) => {
      const book = action.payload;
      if (state.book.find((item) => item.id === book.id)) {
        state.book = state.book.filter((item) => item.id !== book.id);
      } else {
        state.book = [...state.book, book];
      }
    },
  },
});

export const { favoritar } = favoritoSlice.actions;

export default favoritoSlice.reducer;
