import express, { Request, Response } from "express";
import userRouter from "./module/user/user.router";
import cookieParser from "cookie-parser";
import cors from "cors";
import { globalErrorHandler } from "./errorfolder/globalErrorHandler";
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
const url = "/api/v1";
app.use(`${url}/user`, userRouter);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
app.use(globalErrorHandler);
export default app;
