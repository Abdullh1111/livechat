import { NextFunction, Request, Response } from "express";
import { catchAsyncError } from "../../errorfolder/catchError";
import userService from "./user.service";
import { TUserModel } from "./user.interface";

const addUser = catchAsyncError(async (req: Request, res: Response) => {
  // console.log(req.body);

  const result = await userService.addUser(req.body);
  const { name, email } = result;
  const data = { name, email };
  res.status(201).json({
    success: true,
    message: "Create a user successfully",
    data: data,
  });
});

const loginUser = catchAsyncError(async (req: Request, res: Response) => {
  // console.log(req.body);

  const result = await userService.loginUser(req.body);
  const { name, email } = result;
  const data = { name, email };
  const token = result.Token();
  res
    .status(201)
    .cookie("token", token, {
      httpOnly: true,
    })
    .json({
      success: true,
      message: "Login user successfully",
      data: data,
    });
});
export default {
  addUser,
  loginUser,
};
