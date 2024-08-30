import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import { useEffect } from "react";
import { useAppSelector } from "../hooks/reducer";
import { socket } from "../Mainurl/Url";

const Mainlayout = () => {
  const user = useAppSelector((state) => state.user);
  useEffect(() => {
    if (user) {
      socket.emit("setup", user);
      
    }
  }, [user]);

  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Mainlayout;
