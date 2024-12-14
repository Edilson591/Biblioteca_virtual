import { Books } from "../../services/apiBooks/Books";
import {
  useCreateBookMutation,
  useGetBooksQuery,
} from "../../services/apiBooks/booksApi";

interface FormValues {
  nameBook: string;
  autorBook: string;
  category: string;
  description: string;
  imgLink: string;
  createBook: ReturnType<typeof useCreateBookMutation>[0];
  refetch: ReturnType<typeof useGetBooksQuery>["refetch"];
}

interface HttpError extends Error {
  status?:number
}

export const handleSubmitForm = async (
  event: React.FormEvent<HTMLFormElement>,
  {
    nameBook,
    autorBook,
    category,
    description,
    imgLink,
    refetch,
    createBook,
  }: FormValues
) => {
  event.preventDefault();

  const newBook: Omit<Books, "id" | "create_at" | "update_at"> = {
    titulo: nameBook,
    autor: autorBook,
    categoria: category,
    disponibilidade: true,
    descricao: description,
    img: imgLink
  };
 

  try {
    await createBook(newBook).unwrap();
    refetch();
    alert("Livro cadastrado com sucesso!");
  } catch (error) {
    if(error instanceof Error) {
      alert("Erro ao criar o livro")
    }
      if((error as HttpError).status) {
        const httpError = error as HttpError
        console.log(httpError)
        if(httpError.status === 409) {
          alert('Livro já existe');
        }else {
          alert("Error:" + httpError.message);
        }
      }else {
        alert("Error desconhecido")
      }

  }
};
