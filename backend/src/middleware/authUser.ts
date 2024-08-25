import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../config";
import { appError } from "../errorfolder/appError";
export const authUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  
  const { token } = req.cookies;
  
  if (!token) {
    next(
      new appError(
        "You are not logged in! Please login to access this resource",
        401
      )
    );
  }
  if (config.jwt_secret) {
    jwt.verify(token, config.jwt_secret, (err: any, userData: any) => {
      if (err) {
        // Token is invalid or expired
        if (err.name === "JsonWebTokenError") {
          next(new appError("Invalid token", 401));
        } else if (err.name === "TokenExpiredError") {
          next(new appError("Token has expired", 401));
        } else {
          next(new appError("An error occurred while verifying token", 500));
        }
      } else {
        const user = userData
        // console.log(user);
        
        req.body = {...req.body,user};
        // console.log(req.body);
        
        
        next();
      }
    });
  }
};
