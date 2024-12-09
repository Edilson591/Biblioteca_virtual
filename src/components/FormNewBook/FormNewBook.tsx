import { useState } from "react";
import { Input } from "../Input/Input";
import { SelectComponent } from "../SelectComponent/SelectComponent";
import { useCreateBookMutation, useGetBooksQuery } from "../../services/booksApi";
import { handleSubmitForm } from "../Hooks/formHandlers";

function FormNewBook() {
  const [nameBook, setNameBook] = useState<string>("");
  const [autorBook, setAutorBook] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [imgLink, setImgLink] = useState<string>("");
  const [createBook] = useCreateBookMutation();
  const {refetch} = useGetBooksQuery()

  return (
    <form
      className="my-4"
      onSubmit={(event) => {
        handleSubmitForm(event, {
          nameBook,
          autorBook,
          category,
          description,
          imgLink,
          createBook,
          refetch
        });
      }}
    >
      <div className="grid grid-cols-1 max-w-md gap-2">
        <div className="mb-2">
          <Input
            onChange={(e) => setNameBook(e.target.value)}
            value={nameBook}
            inputPros={{
              type: "text",
              placeholder: "Nome do livro",
              id:"nameBook"
            }}
            label="Name"
          />
        </div>
        <div className="mb-2">
          <Input
            onChange={(e) => setAutorBook(e.target.value)}
            value={autorBook}
            inputPros={{
              type: "text",
              placeholder: "Nome do autor",
              id:"nameAutor"
            }}
            label="Nome do Autor"
          />
        </div>
        <div className="mb-2">
          <Input
            onChange={(e) => setImgLink(e.target.value)}
            value={imgLink}
            inputPros={{
              type: "text",
              placeholder: "Link da imagem",
              id:"linkImg"
            }}
            label="Link Imagem:"
          />
        </div>
        <div className="mb-2">
          <SelectComponent
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            id="categoriaName"
            label="Categoria:"
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
