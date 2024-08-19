import { NextFunction, Request, Response } from "express";
import { zodLogin, zodRegister } from "../module/user/user.zod.validation";
import { appError } from "../errorfolder/appError";

export const validRegister = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const body = zodRegister.parse(req.body);
    req.body = body;
    next();
  } catch (err: any) {
    next(new appError(err.message, 400));
  }
};

export const validLogin = (req: Request, res: Response, next: NextFunction) => {
  try {
    const body = zodLogin.parse(req.body);
    req.body = body;
    next();
  } catch (err: any) {
    next(new appError(err.message, 400));
  }
};
