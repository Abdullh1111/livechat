/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../services/userApi";
import { TUser } from "../type/user";
// import { Toaster } from "react-hot-toast";
import { handleError, handleSuccess } from "../hooks/toas";
import { useEffect } from "react";

const Register = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [update, { data, error }] = useRegisterUserMutation();
  const submit = (datas: TUser) => {
    update(datas);
  };
  useEffect(() => {
    if (data) {
      handleSuccess(data?.message);
      navigate("/login");
    }
    if (error) {
      handleError(error?.data?.message);
    }
  }, [data, error]);
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <div className="lg:w-[30rem]">
            <div className="lg:text-left">
              <h1 className="text-center text-4xl md:text-5xl font-bold">
                Register now!
              </h1>
              <p className="text-center py-6">
                Create an account to chat with your friends.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="flex items-center  ml-8 mt-4">
              <img
                className="w-10 rounded-full shadow-md shadow-cyan-300"
                src="/istockphoto-1362703367-612x612.jpg"
                alt=""
              />
              <p className="text-2xl font-bold">WeChat</p>
            </div>
            <form
              className="card-body"
              onSubmit={handleSubmit((data) => submit(data as TUser))}
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                  {...register("name", { minLength: 3 })}
                ></input>
                {errors.name && (
                  <p className="text-red-700 text-sm mt-2">
                    name must have 3 letter
                  </p>
                )}
              </div>
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
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </form>
            <div className="mb-4 flex justify-center items-center">
              <p>Have an account? </p>
              <Link className="text-cyan-300 " to="/login">
                Login now!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
