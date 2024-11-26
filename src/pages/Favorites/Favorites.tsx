import { useEffect, useState } from "react";
import FormBooks from "../../components/FormBooks/FormBooks";
import { ListBooks } from "../../components/ListBooks/ListBooks";
import { useSelector } from "react-redux";
import { RootReducer } from "../../components/store";
import { Books } from "../../services/interfaceBooks";

interface FavoriteProps {
  showFavorites: boolean;
}

export function Favorites({ showFavorites }: FavoriteProps) {
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
    const storedFavorite = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    if(storedFavorite.length) {
      setBooksFavorites(storedFavorite);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(booksFavoritosRedux));
    setBooksFavorites(booksFavoritosRedux);
  }, [booksFavoritosRedux]);

  console.log("Livros favoritos",booksFavorites)
  return (
    <>
      {showFavorites && (
        <div className="max-w-7xl mx-auto md:px-0 px-4 my-8">
          {showFavorites && (
            <>
              <FormBooks pesquisa={handleFiltrosFavoritos} />
              <ListBooks
                favoritos={booksFavorites}
                isFavorites={true}
                filters={filtrosFavoritos}
              />
            </>
          )}
        </div>
      )}
    </>
  );
}
