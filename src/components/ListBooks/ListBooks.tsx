// import { useEffect } from "react";
import { useGetBooksQuery } from "../../services/booksApi";
import { Books } from "../../services/interfaceBooks";
import { ComponentBook } from "../Book/Book";
import BookFiltered from "../BookFiltered/BookFiltered";

export interface ListBooksProps {
  filters: { search: string; category: string };
  isFavorites?: boolean;
  favoritos?: Books[];
}

export function ListBooks({ filters, favoritos, isFavorites }: ListBooksProps) {
  const { data, isLoading, isError } = useGetBooksQuery();

  if (isLoading) return <h2>...Carregando</h2>;
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
