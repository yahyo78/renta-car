import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IresponseData } from "./carListType";

// api
const api = `http://localhost:5257/`;

export const resApi = createApi({
  reducerPath: "resApi",
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
  endpoints: (builder) => ({
    getRes: builder.query({
      query: () => `api/cars`,
    }),
    getResMe: builder.query({
      query: () => `api/makes/me-reservation`,
    }),
    postRes:builder.mutation({
        query:(resData)=>({
            url:`api/reservations`,
            method:"POST",
            body:resData
        })
    })
  }),
});

export const { useGetResQuery,useGetResMeQuery,usePostResMutation } = resApi;
