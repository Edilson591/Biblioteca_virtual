// import { useEffect } from "react";
import { useGetBooksQuery } from "../../services/booksApi";
import { ComponentBook } from "../Book/Book";

interface ListBooksProps {
  filters: { search: string; category: string };
  isFavorites?: boolean;
  favoritos?: any[];
}

export function ListBooks({ filters, favoritos, isFavorites }: ListBooksProps) {
  const { data, isLoading, isError } = useGetBooksQuery();

  if (isLoading) return <h2>...Carregando</h2>;
  if (isError) return <h2>Ocorreu um erro ao carregar os livros</h2>;

  const { search = "", category = "" } = filters || {};

  const normalizeString = (str: string) =>
    str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase();

  const booksToFilter = isFavorites ? favoritos : data;

  const filteredBooks = booksToFilter?.filter((books) => {
    const normalizeSearch = normalizeString(search);

    const matchedSearch =
      normalizeSearch === "" ||
      normalizeString(books.autor || "").includes(normalizeSearch) ||
      normalizeString(books.titulo || "").includes(normalizeSearch);

    const matchedCategory =
      category === "" ||
      normalizeString(books.categoria || "").includes(normalizeSearch);

    return matchedSearch && matchedCategory;
  });

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-neutral-300 mb-4">
        {isFavorites ? "Livros Favoritos" : "Livros Disponíveis"}
      </h2>

      {filteredBooks?.length ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {filteredBooks?.map((item) => (
            <ComponentBook book={item} key={item.id} />
          ))}
        </ul>
      ) : (
        <p>Nenhum livro encontrado.</p>
      )}
    </section>
  );
}
