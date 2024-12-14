import { Books } from "../../services/apiBooks/Books";

function BookFiltered(
  book: Books[] | undefined,
  filters: { search: string; category: string }
) {
  const { search = "", category = "" } = filters || {};

  const normalizeString = (str: string) =>
    str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase();

  return book?.filter((books) => {
    const normalizeSearch = normalizeString(search);
    const normalizeCategory = normalizeString(category);

    const matchedSearch =
      normalizeSearch === "" ||
      normalizeString(books.autor || "").includes(normalizeSearch) ||
      normalizeString(books.titulo || "").includes(normalizeSearch);

    const matchedCategory =
      category === "" ||
      normalizeString(books.categoria || "").includes(normalizeCategory);

    return matchedSearch && matchedCategory ;
  });
}

export default BookFiltered
