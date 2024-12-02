import {useState } from "react";
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
      <div className="max-w-7xl mx-auto md:px-0 px-4 my-8">
        <FormBooks pesquisa={handleFiltrosFavoritos} />
        <ListBooks
          favoritos={booksFavoritosRedux}
          isFavorites={true}
          filters={filtrosFavoritos}
        />
      </div>
    </>
  );
}
