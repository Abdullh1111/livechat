import { createSlice } from "@reduxjs/toolkit";
import { TUser } from "../../type/basic-type";

const initialState: Partial<TUser> = {
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state,action) => {
      return {...state,...action.payload}
    },
  },
});
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
