import { useSelector } from "react-redux";
import { FilterBooks } from "../../components/FilterBooks/ComponenteBooks";
import { RootReducer } from "../../components/store";
import { useEffect } from "react";

export interface HomeProps {
  showFavorites: boolean;
}

export function Home({ showFavorites }: HomeProps) {
  const booksFavoritosRedux = useSelector(
    (state: RootReducer) => state.favoritos.book
  );

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(booksFavoritosRedux));
  }, [booksFavoritosRedux]);
  return (
    <>
        <div className="max-w-7xl mx-auto md:px-0 px-4">
          {!showFavorites && (
            <FilterBooks />
          )}
        </div>
    </>
  );
}
