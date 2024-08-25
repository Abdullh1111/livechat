import { Router } from "express";
import userController from "./user.controller";
import { registerUserExist } from "../../middleware/useExists";
import { validLogin, validRegister } from "./../../middleware/user.validation";
import { authUser } from "../../middleware/authUser";
import { uploadCloud } from "../../multer.config/cloudinary";
import { upload } from "../../multer.config/multer.config";
const userRouter = Router();
userRouter.post(
  "/adduser",
  validRegister,
  registerUserExist,
  userController.addUser
);
userRouter.post("/login", validLogin, userController.loginUser);
userRouter.get("/userdata", authUser, userController.userData);
userRouter.get("/getallpeople",authUser,userController.getAllPeople);
userRouter.post("/logout",authUser,userController.logout)
userRouter.put("/editprofile",authUser,upload.single("profileImg"),uploadCloud,  userController.editUser)

export default userRouter;
