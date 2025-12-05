import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IresponseData } from "./carListType";

// api
const api = `http://localhost:5257/`;

export const favoriteApi = createApi({
  // tagTypes["getFav"],
  reducerPath: "favoriteApi",
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
tagTypes:["getFav"],
  endpoints: (builder) => ({
    getfavorite: builder.query({
      query: () => `api/favorites`,
      providesTags:["getFav"],
    }),
    getPost:builder.mutation({
      query: (carId) => ({
        url:`api/favorites/${carId}`,
        method:"POST",
      }),
      invalidatesTags:["getFav"]
    }),
    deleteFavorite:builder.mutation({
      query: (carId) => ({
        url:`api/favorites/${carId}`,
        method:"DELETE",
      }),
      invalidatesTags:["getFav"]
    }),
  }),
});

export const { useGetfavoriteQuery,useGetPostMutation,useDeleteFavoriteMutation } = favoriteApi;
