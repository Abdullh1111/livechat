import { useEffect } from "react";
import { handleError } from "../hooks/toas";
import { useUserDataQuery } from "../services/userApi";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PrivateRoute = ({ children }: { children: any }) => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useUserDataQuery();
  useEffect(() => {
    if (!isLoading) {
      if (error) {
        handleError(error?.data?.message || error?.error);
        navigate("login");
      }

      if (!data) {
        return navigate("/login");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error, isLoading]);
  return <div>{isLoading ? "loading" : children}</div>;
};

export default PrivateRoute;
