import { Model } from "mongoose";

export type TUser = {
  name: string;
  email: string;
  password: string;
  profileImg?: File;
};
export type TToken = {
  Token: () => string;
};
export type TUserModel = Model<TUser, {}, TToken>;
