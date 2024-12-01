import { useEffect, useState } from "react";
import FormBooks from "../../components/FormBooks/FormBooks";
import { ListBooks } from "../../components/ListBooks/ListBooks";
import { useSelector } from "react-redux";
import { RootReducer } from "../../components/store";
import { Books } from "../../services/interfaceBooks";
import useStorage from "../../components/Hooks/useStorage";


export function Favorites() {
  const booksFavoritosRedux = useSelector(
    (state: RootReducer) => state.favoritos.book
  );
  const {getFromLocalStorage,saveLocalStorage} = useStorage()
  const [filtrosFavoritos, setfiltrosFavoritos] = useState({
    search: "",
    category: "",
  });
  const [booksFavorites, setBooksFavorites] = useState<Books[]>([]);

  const handleFiltrosFavoritos = (search: string, category: string) => {
    setfiltrosFavoritos({ search, category });
  };
  useEffect(() => {
        const storedFavorites = getFromLocalStorage("favoritos") || "[]"
        if (storedFavorites) {
          setBooksFavorites(storedFavorites); 
    }
  }, [getFromLocalStorage]);

  useEffect(() => {
      saveLocalStorage("favoritos",booksFavoritosRedux);
      setBooksFavorites(booksFavoritosRedux);
  }, [booksFavoritosRedux,saveLocalStorage]);

  return (
    <>
      <div className="max-w-7xl mx-auto md:px-0 px-4 my-8">
        <FormBooks pesquisa={handleFiltrosFavoritos} />
        <ListBooks
          favoritos={booksFavorites}
          isFavorites={true}
          filters={filtrosFavoritos}
        />
      </div>
  </>
);
}
