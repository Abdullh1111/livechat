import { Router } from "express";
import userController from "./user.controller";

const userRouter = Router();

userRouter.post("/adduser", userController.addUser);

export default userRouter;
