import { NextFunction, Request, Response } from "express";
import { zodUser } from "../module/user/user.zod.validation";
import { appError } from "../errorfolder/appError";

export const validUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    const body = zodUser.parse(req.body);
    req.body = body;
    next();
  } catch (err: any) {
    next(new appError(err.message, 400));
  }
};
