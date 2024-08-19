import { createSlice } from "@reduxjs/toolkit";
import { TUser } from "../../type/user";

const initialState: TUser = {
  name: "",
  email: "",
  password: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: () => {},
  },
});
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
