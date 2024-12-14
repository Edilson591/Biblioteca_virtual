import { useDispatch, useSelector } from "react-redux";
import { Books } from "../../services/apiBooks/Books";
import { RootReducer } from "../store";
import { favoritar } from "../store/reducers/favoritos";
import Star from "@mui/icons-material/Star";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import StarOutline from "@mui/icons-material/StarOutline";
import {
  useDeleteBookMutation,
  useGetBooksQuery,
} from "../../services/apiBooks/booksApi";

interface BookProps {
  book: Books[] | undefined;
}

export function ComponentBook({ book }: BookProps) {
  const dispatch = useDispatch();
  const favoritos = useSelector(
    (state: RootReducer) => state.favoritos.book || []
  );
  const { isAuthenticated } = useSelector(
    (state: RootReducer) => state.authBooksUser
  );
  const [deleteBook] = useDeleteBookMutation();
  const { refetch } = useGetBooksQuery();

  const handleDeleteBooks = async (id: string) => {
    try {
      await deleteBook(id).unwrap();
      refetch();
      alert("Livro deletado com sucesso");
    } catch (error) {
      console.error("Erro ao excluir o livro:", error);
      alert("Falha na solicitação.");
    }
  };

  return (
    <>
      {book?.length ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {book.map((item: Books) => {
            const isFavorite = favoritos.some((fav) => fav.id === item.id);
            return (
              <li
                key={item.id}
                className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 h-max hover:scale-105 transition-transform duration-300 max-h-400px overflow-y-hidden relative"
              >
                {isAuthenticated && (
                  <button onClick={() => handleDeleteBooks(item.id)}>
                    <CloseRoundedIcon />
                  </button>
                )}
                <img
                  src={item.img ? item.img : "https://placehold.co/600x400"}
                  alt={item.titulo}
                  className="w-full object-cover object-top h-48 rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold text-neutral-300 overflow-hidden text-ellipsis whitespace-nowrap">
                  {item.titulo}
                </h3>
                <p className="text-gray-400">Autor: {item.autor}</p>
                <p className="text-gray-400">Categoria: {item.categoria}</p>
                <p className="text-gray-400">
                  Status:{" "}
                  {item.disponibilidade === true
                    ? "Disponivel"
                    : "Indisponivel"}
                </p>
                <p className="text-gray-300 mt-2 hover:overflow-auto hover:whitespace-normal hover:line-clamp-none line-clamp-4 text-ellipsis w-full h-24 scrollbar-thin scrollbar-webkit">
                  {item.descricao}
                </p>
                <button className="bg-stone-500 text-gray-900 p-2 rounded-md mt-4 hover:bg-teal-400 w-full">
                  Saiba Mais
                </button>
                <button
                  className={`rounded-md mt-4 hover:bg-teal-400 absolute top-1 right-5 z-10 ${
                    isFavorite
                      ? "bg-stone-500 text-gray-900"
                      : "bg-gray-900 text-stone-500"
                  }`}
                  onClick={() => dispatch(favoritar(item))}
                >
                  {isFavorite ? <Star /> : <StarOutline />}
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Nenhum livro encontrado.</p>
      )}
    </>
  );
}
