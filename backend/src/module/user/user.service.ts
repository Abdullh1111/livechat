import { NextFunction } from "express";
import { appError } from "../../errorfolder/appError";
import { TUser } from "./user.interface";
import { user } from "./user.model";

const addUser = async (payload: TUser) => {
  // console.log(payload);

  try {
    const result = await user.create(payload);
    return result;
  } catch (err: any) {
    throw new appError(err.message, 400);
  }
};

export default {
  addUser,
};
