import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../services/userApi";
import { TUser } from "../type/basic-type";
import { handleError, handleSuccess } from "../hooks/toas";
import { useEffect, useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [cookie, setCookie] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [update, { data, error }] = useLoginUserMutation();
  useEffect(() => {
    if (data) {
      handleSuccess(data?.message);
      setCookie(true);
      // setTimeout(() => {
      //   navigate("/");
      // }, 1000);
    }
    if (error) {
      handleError(error?.data?.message);
    }
  }, [data, error]);
  useEffect(() => {
    if (cookie) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cookie]);
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <div className="lg:w-96">
            <div className="lg:text-left">
              <h1 className="text-center text-5xl font-bold">Login now!</h1>
              <p className="text-center py-6">Welcome back to the WeChat.</p>
            </div>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="flex items-center  ml-8 mt-4">
              <img
                className="w-10 rounded-full shadow-md shadow-cyan-300"
                src="/public/istockphoto-1362703367-612x612.jpg"
                alt=""
              />
              <p className="text-2xl font-bold">WeChat</p>
            </div>
            <form
              className="card-body"
              onSubmit={handleSubmit((data) => update(data as TUser))}
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  {...register("email")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  {...register("password", { minLength: 8 })}
                />
                {errors.password && (
                  <p className="text-red-700 text-sm mt-2">
                    password must be 8 character
                  </p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
            <div className="mb-4 flex justify-center items-center">
              <p>Don't have an account? </p>
              <Link className="text-cyan-300" to="/register">
                Register now!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
