import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "../Mainurl/Url";

export const messageApi = createApi({
  reducerPath: "messageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${url}/message`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    sentMessage: builder.mutation({
      query: (data) => ({
        url: "/send",
        method: "POST",
        body: data,
      }),
    }),
  }),
});
export const { useSentMessageMutation } = messageApi;
