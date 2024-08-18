import { NextFunction, Request, Response } from "express";
import { appError } from "./appError";

export const globalErrorHandler = (
  err: appError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let message = err.message || "Enternal server Error";
  let status = err.status || 500;
  res.status(status).json({ success: false, message });
};
