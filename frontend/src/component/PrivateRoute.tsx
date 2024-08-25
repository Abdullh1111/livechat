import { useEffect } from "react";
import { handleError } from "../hooks/toas";
import { useUserDataQuery } from "../services/userApi";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/reducer";
import { setUser } from "../features/user/userSlice";

const PrivateRoute = ({
  // redirect,
  children,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}) => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useUserDataQuery();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!isLoading) {
      if (error) {
        handleError(error);
        navigate("login");
      }
      if (data) {
        dispatch(setUser(data.data));
        return navigate("/");
      }
      if (!data) {
        return navigate(`/login`);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error, isLoading]);
  return <div>{isLoading ? "loading" : children}</div>;
};

export default PrivateRoute;
