import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../pages/Mainlayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../component/PrivateRoute";
import Chatting from "../pages/Chatting";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute redirect="login">
        <Mainlayout></Mainlayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: <Chatting></Chatting>,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <PrivateRoute redirect="">
        <Login></Login>
      </PrivateRoute>
    ),
  },
  {
    path: "/register",
    element: (
      <PrivateRoute redirect="">
        <Register></Register>
      </PrivateRoute>
    ),
  },
]);
