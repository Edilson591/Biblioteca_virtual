import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Books } from "../../../services/interfaceBooks";

const getStoredFavorites = (): Books[] => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedFavorites = localStorage.getItem("favorites");
    console.log("Carregando favoritos do localStorage:", storedFavorites);
    if (storedFavorites) {
      const parsedFavorites = JSON.parse(storedFavorites);
      if (Array.isArray(parsedFavorites)) {
        return parsedFavorites;
      }
    }
  }
  return [];
};
const storedFavorite = getStoredFavorites();

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
      let updatedBooks;
      if (state.book.find((item) => item.id === book.id)) {
        updatedBooks = state.book.filter((item) => item.id !== book.id);
      } else {
        updatedBooks = [...state.book, book];
      }
      state.book = updatedBooks;
      if (typeof window !== "undefined" && window.localStorage) {
        localStorage.setItem("favorites", JSON.stringify(state.book));
      }
    },
  },
});

export const { favoritar } = favoritoSlice.actions;

export default favoritoSlice.reducer;
