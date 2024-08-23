import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {  url } from "../Mainurl/Url";

export const messageApi = createApi({
  reducerPath: "messageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${url}/message`,
    credentials: "include",
  }),
  tagTypes: ["message"],
  endpoints: (builder) => ({
    sentMessage: builder.mutation({
      query: (data) => ({
        url: "/send",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["message"],
    }),
    getMessage: builder.query({
      query: (id) => ({
        url: `/get/${id}`,
        method: "GET",
      }),
      providesTags: ["message"],
      
    }),
  }),
});

export const { useSentMessageMutation, useGetMessageQuery } = messageApi;
