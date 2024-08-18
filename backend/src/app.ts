import express, { Request, Response } from "express";
import userRouter from "./module/user/user.router";
import { globalErrorHandler } from "./errorfolder/globalErrorHandler";
const app = express();
app.use(express.json());
const url = "/api/v1";
app.use(`${url}/user`, userRouter);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
app.use(globalErrorHandler);
export default app;
