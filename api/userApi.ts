import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = `http://localhost:5257/`;

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: api,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("accsess_token");

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["getUser"],
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => `api/makes/me`,
    }),
  }),
});

export const { useGetMeQuery } = userApi;
