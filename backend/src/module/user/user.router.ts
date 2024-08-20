import { Router } from "express";
import userController from "./user.controller";
import { registerUserExist } from "../../middleware/useExists";
import { validLogin, validRegister } from "./../../middleware/user.validation";
import { authUser } from "../../middleware/authUser";

const userRouter = Router();

userRouter.post(
  "/adduser",
  validRegister,
  registerUserExist,
  userController.addUser
);
userRouter.post("/login", validLogin, userController.loginUser);
userRouter.get("/userdata", authUser, userController.userData);
userRouter.get("/getallpeople",authUser,userController.getAllPeople)

export default userRouter;
