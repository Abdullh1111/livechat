import { Router } from "express";
import messageController from "./message.controller";
import { authUser } from "../../middleware/authUser";

const messageRoute = Router();
messageRoute.post("/send",authUser, messageController.sentMassage);
messageRoute.get("/get/:id",authUser, messageController.getMessage);

export default messageRoute;
