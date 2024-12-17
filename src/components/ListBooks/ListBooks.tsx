import { useGetBooksQuery } from "../../services/apiBooks/booksApi";
import { Books } from "../../services/apiBooks/Books";
import { ComponentBook } from "../Book/Book";
import BookFiltered from "../BookFiltered/BookFiltered";
import Spinner from "../SpinnerComponent/Spinner";

export interface ListBooksProps {
  filters: { search: string; category: string };
  isFavorites?: boolean;
  favoritos?: Books[];
}

export function ListBooks({ filters, favoritos, isFavorites }: ListBooksProps) {
  const { data, isLoading, isError } = useGetBooksQuery();

  if (isLoading) {
    return (
      <Spinner/>
    );
  }
  if (isError) return <h2>Ocorreu um erro ao carregar os livros</h2>;

  const booksToFilter = isFavorites ? favoritos : data;
  const filteredBook = BookFiltered(booksToFilter, filters);

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-neutral-300 mb-4">
        {isFavorites ? "Livros Favoritos" : "Livros Disponíveis"}
      </h2>
      <ComponentBook book={filteredBook} />
    </section>
  );
}
