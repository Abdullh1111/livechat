import { RiLogoutCircleRFill } from "react-icons/ri";
import { handleError, handleSuccess } from "../hooks/toas";
import { useLogoutMutation } from "../services/userApi";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Logout = () => {
  const navigate = useNavigate();
  const [update, { data, error }] = useLogoutMutation();
  useEffect(() => {
    if (error) {
      handleError(error?.data?.message || error?.error);
    }
    if (data) {
      handleSuccess(data?.message);
      navigate("/login");
    }
  }, [error, data]);
  // const handleLogout = () =>{
  // }
  return (
    <div role="button" onClick={() => update()} className="flex">
      <RiLogoutCircleRFill className="text-xl" />
      <p>Logout</p>
    </div>
  );
};

export default Logout;
