import { useDispatch, useSelector } from "react-redux";
import { Books } from "../../services/interfaceBooks";
import { RootReducer } from "../store";
import { favoritar } from "../store/reducers/favoritos";
import { useEffect } from "react";
import Star from "@mui/icons-material/Star";
import StarOutline from "@mui/icons-material/StarOutline";

interface BookProps {
  book: Books[] | undefined;
}
export function ComponentBook({ book }: BookProps) {
  const dispatch = useDispatch();
  const favoritos = useSelector(
    (state: RootReducer) => state.favoritos.book || []
  );

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoritos));
  }, [favoritos]);

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    if (storedFavorites.length) {
      storedFavorites.forEach((book: Books) => dispatch(favoritar(book)));
    }
  }, [dispatch]);

  return (
    <>
      {book?.length ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {book.map((item: Books) => (
            <li
              key={item.id}
              className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 h-max hover:scale-105 transition-transform duration-300 max-h-400px overflow-y-hidden relative"
            >
              <img
                src={item.img}
                alt={item.titulo}
                className="w-full object-cover object-top h-48 rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-neutral-300 overflow-hidden text-ellipsis whitespace-nowrap">
                {item.titulo}
              </h3>
              <p className="text-gray-400">Autor: {item.autor}</p>
              <p className="text-gray-400">Categoria: {item.categoria}</p>
              <p className="text-gray-400">Status: {item.disponibilidade === true ? "Disponivel" : "Indisponivel"}</p>
              <p className="text-gray-300 mt-2 hover:overflow-auto hover:whitespace-normal hover:line-clamp-none line-clamp-4 text-ellipsis w-full h-24 scrollbar-thin scrollbar-webkit">
                {item.descricao}
              </p>
              <button className="bg-stone-500 text-gray-900 p-2 rounded-md mt-4 hover:bg-teal-400 w-full">
                Saiba Mais
              </button>
              <button
                className={`rounded-md mt-4 hover:bg-teal-400 absolute top-1 right-5 z-10 ${
                  favoritos.some((fav) => fav.id === item.id)
                    ? "bg-stone-500 text-gray-900"
                    : "bg-gray-900 text-stone-500"
                }`}
                onClick={() => dispatch(favoritar(item))}
              >
                {favoritos.some((fav) => fav.id === item.id) ? (
                  <Star />
                ) : (
                  <StarOutline />
                )}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum livro encontrado.</p>
      )}
    </>
  );
}
