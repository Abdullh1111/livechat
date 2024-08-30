import express, { Request, Response } from "express";
import userRouter from "./module/user/user.router";
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from 'body-parser'
import { globalErrorHandler } from "./errorfolder/globalErrorHandler";
import messageRoute from "./module/messages/message.router";
const app = express();
export const url = "https://livechat-backend-h4zd.onrender.com"
app.use(cors({ origin: url, credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// const url = "/api/v1";
app.use(`/api/v1/user`, userRouter);
app.use(`/api/v1/message`, messageRoute);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
app.use(globalErrorHandler);
export default app;
