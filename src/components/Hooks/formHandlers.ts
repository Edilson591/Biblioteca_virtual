import { Books } from "../../services/interfaceBooks";
import { useCreateBookMutation } from '../../services/booksApi';

interface FormValues {
  nameBook: string;
  autorBook: string;
  category: string;
  description: string;
  createBook: ReturnType<typeof useCreateBookMutation>[0];
}

export const handleSubmitForm = async (
  event: React.FormEvent<HTMLFormElement>,
  { nameBook, autorBook, category, createBook, description }: FormValues
) => {
    event.preventDefault();

    const newBook: Omit<Books, 'id' | 'create_at' | 'update_at'> = {
      titulo: nameBook,
      autor: autorBook,
      categoria: category,
      disponibilidade: true,
      descricao: description,
    }

    try {
      await createBook(newBook).unwrap()
      alert("Livro cadastrado com sucesso!");
      
    } catch (error) {
      console.log("Error ao carregar o livro", error)
      alert("falha na solicitação")
    }
};
