import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../pages/Mainlayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../component/PrivateRoute";
import Chatting from "../pages/Chatting";
import EditProfile from "../pages/EditProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Mainlayout></Mainlayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: <Chatting></Chatting>,
      },
      {
        path: '/editprofile',
        element: <EditProfile></EditProfile>
      }
    ],
  },
  {
    path: "/login",
    element: (
      <PrivateRoute>
        <Login></Login>
      </PrivateRoute>
    ),
  },
  {
    path: "/register",
    element: (
      <PrivateRoute>
        <Register></Register>
      </PrivateRoute>
    ),
  },
]);
