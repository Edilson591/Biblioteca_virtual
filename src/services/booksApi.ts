import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Books } from "./interfaceBooks";

const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:1000/",
  }),
  endpoints: (builder) => ({
    getBooks: builder.query<Books[], void>({
      query: () => "books",
    }),
    createBook: builder.mutation<
      void,
      Omit<Books, "id" | "create_at" | "update_at">
    >({
      query: (newBook) => ({
        url: "/book",
        method: "POST",
        body: newBook,
      }),
    }),
    updateBook: builder.mutation<
      void,
      { id: string } & Partial<Omit<Books, "id" | "create_at" | "update_at">>
    >({
      query: ({ id, ...rest }) => ({
        url: `${id}`,
        method: "PUT",
        body: rest,
      }),
    }),
    deleteBook: builder.mutation<void, string>({
      query: (id) => ({
        url: `book?id=${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetBooksQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = booksApi;

export default booksApi;
