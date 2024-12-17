import { useState } from "react";
import FormBooks from "../../components/FormBooks/FormBooks";
import { ListBooks } from "../../components/ListBooks/ListBooks";
import { useSelector } from "react-redux";
import { RootReducer } from "../../components/store";

export function Favorites() {
  const booksFavoritosRedux = useSelector(
    (state: RootReducer) => state.favoritos.book
  );

  const [filtrosFavoritos, setfiltrosFavoritos] = useState({
    search: "",
    category: "",
  });

  const handleFiltrosFavoritos = (search: string, category: string) => {
    setfiltrosFavoritos({ search, category });
  };

  return (
    <>
      <FormBooks pesquisa={handleFiltrosFavoritos} />
      <ListBooks
        favoritos={booksFavoritosRedux}
        isFavorites={true}
        filters={filtrosFavoritos}
      />
    </>
  );
}
