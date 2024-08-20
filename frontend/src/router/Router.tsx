import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../pages/Mainlayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./../pages/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Mainlayout></Mainlayout>
      </PrivateRoute>
    ),
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
