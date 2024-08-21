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
      secure: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
    })
    .json({
      success: true,
      message: "Login user successfully",
      data: data,
    });
});

const userData = catchAsyncError(async (req: Request, res: Response) => {
  // console.log(req.body);

  res.status(201).json({
    success: true,
    message: "Get user data successfully",
    data: req.body.user,
  });
});

const getAllPeople = catchAsyncError(async (req: Request, res: Response) => {
  // console.log(req.body);

  const result = await userService.getAllPeople(req.body.user);

  res.status(201).json({
    success: true,
    message: "get all user successfully",
    data: result,
  });
});

const logout = catchAsyncError(async (req: Request, res: Response) => {
  // console.log(req.body);

  res.clearCookie('token').status(201).json({
    success: true,
    message: "Logout successfully",
  });
});
export default {
  addUser,
  loginUser,
  userData,
  getAllPeople,
  logout
};
