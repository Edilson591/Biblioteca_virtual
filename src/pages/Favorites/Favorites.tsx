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
    if (typeof window !== "undefined" && window.localStorage) {
      try {
        localStorage.setItem("favorites", JSON.stringify(booksFavoritosRedux));
        setBooksFavorites(booksFavoritosRedux);
      } catch (error) {
        console.error("Erro ao ler favoritos do localStorage", error);
      }
    }
  }, [booksFavoritosRedux]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedFavorites = localStorage.getItem("favorites") || "[]";
      if (storedFavorites) {
        try {
          const parseFavorites = JSON.parse(storedFavorites);
          if (Array.isArray(parseFavorites)) {
            setBooksFavorites(parseFavorites);
          }
        } catch (error) {
          console.error("Erro ao ler favoritos do localStorage", error);
        }
      }
    }
  }, []);

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
