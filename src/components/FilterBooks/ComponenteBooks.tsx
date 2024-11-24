import { useState } from "react";
import FormBooks from "../FormBooks/FormBooks";
import { ListBooks } from "../ListBooks/ListBooks";

export function FilterBooks() {
  const [filtros, setfiltros] = useState({ search: "", category: "" });

  const handleFilter = (search: string, category: string) => {
    setfiltros({ search, category });
  };

  return (
    <section className="my-8">
      <FormBooks pesquisa={handleFilter} />
      <ListBooks filters={filtros}/>
    </section>
  );
}
