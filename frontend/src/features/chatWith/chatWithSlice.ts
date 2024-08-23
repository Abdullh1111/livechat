import { createSlice } from "@reduxjs/toolkit";
import { TUser } from "../../type/basic-type";
const initialState: Partial<TUser> = {
  _id: "",
  name: "",
  email: "",
};
const chatWithSlice = createSlice({
  name: "chatWith",
  initialState,
  reducers: {
    setChatWith: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export default chatWithSlice.reducer;
export const { setChatWith } = chatWithSlice.actions;
