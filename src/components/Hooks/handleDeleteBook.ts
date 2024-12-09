// import {
//   useDeleteBookMutation,
//   useGetBooksQuery,
// } from "../../services/booksApi";

// const [deleteBook] = useDeleteBookMutation();
// const { refetch } = useGetBooksQuery();
// export const handleDeleteBooks = async (id: string) => {
//   try {
//     await deleteBook(id).unwrap();
//     refetch();
//     alert("Livro deletado com sucesso");
//   } catch (error) {
//     console.error("Erro ao excluir o livro:", error);
//     alert("Falha na solicitação.");
//   }
// };
