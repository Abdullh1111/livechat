import { createSlice } from "@reduxjs/toolkit";

const newMessageSlice = createSlice({
  name: "newMessage",
  initialState: null,
  reducers: {
    updateMessage(state, action) {
      state = action.payload;
    },
  },
});

export default newMessageSlice.reducer;
export const { updateMessage } = newMessageSlice.actions;
