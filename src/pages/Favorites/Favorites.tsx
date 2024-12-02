import { useEffect, useState } from "react";
import FormBooks from "../../components/FormBooks/FormBooks";
import { ListBooks } from "../../components/ListBooks/ListBooks";
import { useSelector } from "react-redux";
import { RootReducer } from "../../components/store";
import { Books } from "../../services/interfaceBooks";

export function Favorites() {
  const booksFavoritosRedux = useSelector(
    (state: RootReducer) => state.favoritos.book
  );

  const [filtrosFavoritos, setfiltrosFavoritos] = useState({
    search: "",
    category: "",
  });
  const [booksFavorites, setBooksFavorites] = useState<Books[]>([]);

  const handleFiltrosFavoritos = (search: string, category: string) => {
    setfiltrosFavoritos({ search, category });
  };
  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    if (storedFavorites) {
      setBooksFavorites(storedFavorites);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(booksFavoritosRedux));
    setBooksFavorites(booksFavoritosRedux);
  }, [booksFavoritosRedux]);

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
