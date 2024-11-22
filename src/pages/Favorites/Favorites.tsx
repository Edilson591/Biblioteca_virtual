import { useState } from "react";
import FormBooks from "../../components/FormBooks/FormBooks";
import { ListBooks } from "../../components/ListBooks/ListBooks";
import { useSelector } from "react-redux";
import { RootReducer } from "../../components/store";

interface FavoriteProps {
  showFavorites: boolean;
}

export function Favorites({ showFavorites }: FavoriteProps) {
  const booksFavoritos = useSelector((state:RootReducer) => state.favoritos.book)
  const [filtrosFavoritos, setfiltrosFavoritos] = useState({
    search: "",
    category: "",
  });

  const handleFiltrosFavoritos = (search: string, category: string) => {
    setfiltrosFavoritos({ search, category });
  };

  return (
    <>
      {showFavorites && (
          <div className="max-w-7xl mx-auto px-4 my-8">
            {showFavorites && (
              <>
                <FormBooks pesquisa={handleFiltrosFavoritos} />
                <ListBooks favoritos={booksFavoritos} isFavorites={true} filters={filtrosFavoritos} />
              </>
            )}
          </div>
      )}
    </>
  );
}
