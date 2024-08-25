/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TUser } from "../type/basic-type";
import { url } from "../Mainurl/Url";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${url}/user`,
    credentials: "include",
    
  }),
  tagTypes: ["userData"],
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
    userData: builder.query({
      query: () => "/userdata",
      providesTags : ["userData"]
    }),
    allPeople: builder.query({
      query: () => "/getallpeople",
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),
    editProfile: builder.mutation({
      query: (data) => ({
        url: "/editprofile",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["userData"]
    }),
  }),
});
export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useUserDataQuery,
  useAllPeopleQuery,
  useLogoutMutation,
  useEditProfileMutation
} = userApi;
