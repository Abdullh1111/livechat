import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TUser } from "../type/user";
import { url } from "../Mainurl/Url";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${url}/user`,
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data: TUser) => ({
        url: "/adduser",
        method: "POST",
        body: data,
      }),
    }),
  }),
});
export const { useRegisterUserMutation } = userApi;
