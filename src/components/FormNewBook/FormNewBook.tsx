import { useState } from "react";
import { Input } from "../Input/Input";
import { SelectComponent } from "../SelectComponent/SelectComponent";
import { useCreateBookMutation } from "../../services/booksApi";
import { handleSubmitForm } from "../Hooks/formHandlers";

function FormNewBook() {
  const [nameBook, setNameBook] = useState<string>("");
  const [autorBook, setAutorBook] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [createBook] = useCreateBookMutation();

  return (
    <form
      className="my-4"
      onSubmit={(event) => {
        handleSubmitForm(event, {
          nameBook,
          autorBook,
          category,
          description,
          createBook,
        });
      }}
    >
      <div className="grid grid-cols-1 max-w-md gap-2">
        <div className="mb-2">
          <label
            htmlFor="nameBook"
            className="text-neutral-300 font-bold mb-1 block"
          >
            Nome:
          </label>
          <Input
            type="text"
            onChange={(e) => setNameBook(e.target.value)}
            value={nameBook}
            placeholder="Nome do livro"
            id="nameBook"
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="autorBook"
            className="text-neutral-300 font-bold mb-1 block"
          >
            Autor:
          </label>
          <Input
            type="text"
            onChange={(e) => setAutorBook(e.target.value)}
            value={autorBook}
            placeholder="Nome do autor"
            id="nameAutor"
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="categoriaName"
            className="text-neutral-300 font-bold mb-1 block"
          >
            Categoria:
          </label>
          <SelectComponent
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            id="categoriaName"
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="description"
            className="text-neutral-300 font-bold mb-1 block"
          >
            Descrição:
          </label>
          <textarea
            id="description"
            className="w-full h-40 p-2 rounded-md border border-neutral-500 bg-gray-800 text-neutral-300 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-950"
            placeholder="Descrição do livro"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button
          className="bg-teal-600 text-gray-900 p-2 rounded-md hover:bg-teal-400 w-full"
          type="submit"
        >
          Enviar
        </button>
      </div>
    </form>
  );
}

export default FormNewBook;
