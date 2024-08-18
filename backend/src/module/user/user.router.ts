import { Router } from "express";
import userController from "./user.controller";
import { userExist } from "../../middleware/useExists";
import { validUser } from "../../middleware/user.validation";

const userRouter = Router();

userRouter.post("/adduser", validUser, userExist, userController.addUser);

export default userRouter;
