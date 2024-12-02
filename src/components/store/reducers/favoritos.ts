import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Books } from "../../../services/interfaceBooks";

const getStoredFavorites = () => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
};
const storedFavorite = getStoredFavorites()

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
      if (typeof window !== "undefined") {
        localStorage.setItem("favorites", JSON.stringify(state.book));
      }
    },
  },
});

export const { favoritar } = favoritoSlice.actions;

export default favoritoSlice.reducer;
