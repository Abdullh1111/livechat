import { Router } from "express";
import userController from "./user.controller";
import { registerUserExist } from "../../middleware/useExists";
import { validLogin, validRegister } from "./../../middleware/user.validation";

const userRouter = Router();

userRouter.post(
  "/adduser",
  validRegister,
  registerUserExist,
  userController.addUser
);
userRouter.post("/login", validLogin, userController.loginUser);

export default userRouter;
