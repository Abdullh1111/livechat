import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../pages/Mainlayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);
