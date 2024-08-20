/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TUser } from "../type/user";
import { url } from "../Mainurl/Url";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${url}/user`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data: TUser) => ({
        url: "/adduser",
        method: "POST",
        body: data,
      }),
    }),

    loginUser: builder.mutation({
      query: (data: TUser) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
    }),
    userData: builder.query<any,void>({
      query: () => "/userdata",
    }),
  }),
});
export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useUserDataQuery,
} = userApi;
