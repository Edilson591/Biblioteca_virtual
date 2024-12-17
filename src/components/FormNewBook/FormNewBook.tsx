import { useState } from "react";
import { Input } from "../Input/Input";
import { SelectComponent } from "../SelectComponent/SelectComponent";
import {
  useCreateBookMutation,
  useGetBooksQuery,
} from "../../services/apiBooks/booksApi";
import { handleSubmitForm } from "../Hooks/formHandlers";
import { useNavigate } from "react-router-dom";
import { NewBook } from "./interfaceNewBook";

function FormNewBook() {
  const [formBook, setFormBook] = useState<NewBook | undefined>();
  const [createBook] = useCreateBookMutation();
  const { refetch } = useGetBooksQuery();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    if(formBook){
      setFormBook({
        ...formBook,
        [e.target.name]: e.target.value,
      });
      console.log(formBook);
    }
  };

  return (
    <form
      className="my-4"
      onSubmit={(event) => {
        if(formBook){
          handleSubmitForm(event, {
            formBook,
            createBook,
            refetch,
            navigate,
          });
        }
      }}
    >
      <div className="grid grid-cols-1 max-w-md gap-2">
        <div className="mb-2">
          <Input
            onChange={handleChange}
            value={formBook?.name}
            inputPros={{
              name: "name",
              type: "text",
              placeholder: "Nome do livro",
              id: "nameBook",
            }}
            label="Name: "
          />
        </div>
        <div className="mb-2">
          <Input
            onChange={handleChange}
            value={formBook?.autor}
            inputPros={{
              name: "autor",
              type: "text",
              placeholder: "Nome do autor",
              id: "nameAutor",
            }}
            label="Nome do Autor: "
          />
        </div>
        <div className="mb-2">
          <Input
            onChange={handleChange}
            value={formBook?.imagemBook}
            inputPros={{
              name: "img",
              type: "text",
              placeholder: "Link da imagem",
              id: "linkImg",
            }}
            label="Link Imagem:"
          />
        </div>
        <div className="mb-2">
          <SelectComponent
            onChange={handleChange}
            value={formBook?.categoria}
            name="categoria"
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
            className="w-full h-40 p-2 rounded-md border border-neutral-500 bg-gray-800 text-neutral-300 hover:overflow-auto hover:whitespace-normal hover:line-clamp-none line-clamp-4 text-ellipsis scrollbar-thin scrollbar-webkit focus:outline-none focus:ring-2 focus:ring-blue-950 resize-none"
            placeholder="Descrição do livro"
            name="descricao"
            onChange={handleChange}
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
