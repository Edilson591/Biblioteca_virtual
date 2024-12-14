import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "./Users";

interface LoginResponse {
  message: string;
  token: string;
}

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:3000",
  }),
  endpoints: (builder) => ({
    CreateUsers: builder.mutation<User, void>({
      query: (newUser) => ({
        url: "/users",
        method: "POST",
        body: newUser,
      }),
    }),
    LoginUser: builder.mutation<LoginResponse, User>({
      query: (user) => ({
        url: "/login",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const { useCreateUsersMutation, useLoginUserMutation } = usersApi;

export default usersApi;
