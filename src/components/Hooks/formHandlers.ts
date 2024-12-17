import { NavigateFunction } from "react-router-dom";
import { Books } from "../../services/apiBooks/Books";
import {
  useCreateBookMutation,
  useGetBooksQuery,
} from "../../services/apiBooks/booksApi";
import { NewBook } from "../FormNewBook/interfaceNewBook";

interface FormValues {
  formBook: NewBook;
  createBook: ReturnType<typeof useCreateBookMutation>[0];
  refetch: ReturnType<typeof useGetBooksQuery>["refetch"];
  navigate: NavigateFunction;
}

interface HttpError extends Error {
  status?: number;
}

export const handleSubmitForm = async (
  event: React.FormEvent<HTMLFormElement>,
  { formBook, refetch, createBook, navigate }: FormValues
) => {
  event.preventDefault();

  const newBook: Omit<Books, "id" | "create_at" | "update_at"> = {
    titulo: formBook.name,
    autor: formBook.autor,
    categoria: formBook.categoria,
    disponibilidade: true,
    descricao: formBook.descricao,
    img: formBook.imagemBook,
  };

  try {
    await createBook(newBook).unwrap();
    refetch();
    alert("Livro cadastrado com sucesso!");
    navigate("/");
  } catch (error) {
    if (error instanceof Error) {
      alert("Erro ao criar o livro");
    }
    if ((error as HttpError).status) {
      const httpError = error as HttpError;
      console.log(httpError);
      if (httpError.status === 409) {
        alert("Livro já existe");
      } else {
        alert(
          "Error:" + httpError.message
            ? "Preencha todo o formulario"
            : httpError.message
        );
      }
    } else {
      alert("Error desconhecido");
    }
  }
};
