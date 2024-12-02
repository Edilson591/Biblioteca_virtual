import { useSelector } from "react-redux";
import { FilterBooks } from "../../components/FilterBooks/ComponenteBooks";
import { RootReducer } from "../../components/store";
import { useEffect } from "react";


export function Home() {
  const booksFavoritosRedux = useSelector(
    (state: RootReducer) => state.favoritos.book
  );

  useEffect(() => {
    if(typeof window !== 'undefined' && window.localStorage){
      localStorage.setItem("favorites", JSON.stringify(booksFavoritosRedux));
    }
  }, [booksFavoritosRedux]);

  return (
    <>
        <div className="max-w-7xl mx-auto md:px-0 px-4">
            <FilterBooks />
        </div>
    </>
  );
}
