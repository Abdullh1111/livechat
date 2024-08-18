import { NextFunction, Request, Response } from "express";
import { user } from "../module/user/user.model";
import { appError } from "../errorfolder/appError";

export const userExist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;
  const response = await user.findOne({ email });
  if (response) {
    next(new appError("User already exist", 400));
  } else {
    next();
  }
};
