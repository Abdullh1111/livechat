import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import { userApi } from "../services/userApi";
import chatWithSlice from "../features/chatWith/chatWithSlice";
import { messageApi } from "../services/messageApi";
import newMessageSlice from './../features/chatWith/newmessage';

export const store = configureStore({
  reducer: {
    user: userSlice,
    chatWith: chatWithSlice,
    newMessage: newMessageSlice,
    [userApi.reducerPath]: userApi.reducer,
    [messageApi.reducerPath]: messageApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, messageApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
