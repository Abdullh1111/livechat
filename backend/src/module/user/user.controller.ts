import { NextFunction, Request, Response } from "express";
import { catchAsyncError } from "../../errorfolder/catchError";
import userService from "./user.service";

const addUser = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    // console.log(req.body);

    const result = await userService.addUser(req.body);
    const { name, email } = result;
    const data = { name, email };
    const token = result.Token();
    res.status(201).json({
      success: true,
      message: "Create a user successfully",
      token,
      data: data,
    });
  }
);

export default {
  addUser,
};
