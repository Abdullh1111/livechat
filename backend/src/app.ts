import express, { Request, Response, urlencoded } from "express";
import userRouter from "./module/user/user.router";
import cookieParser from "cookie-parser";
import cors from "cors";
import { globalErrorHandler } from "./errorfolder/globalErrorHandler";
import messageRoute from "./module/messages/message.router";
const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(urlencoded({extended: false})),
app.use("/uploads", express.static((__dirname+ "./upload")));
app.use(express.json());
app.use(cookieParser());
// const url = "/api/v1";
app.use(`/api/v1/user`, userRouter);
app.use(`/api/v1/message`, messageRoute);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
app.use(globalErrorHandler);
export default app;
