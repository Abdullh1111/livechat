import { useForm } from "react-hook-form";

const EditProfile = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
//   console.log(errors);
  
  return (
    <div className=" mx-auto ">
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className=" flex flex-col items-center justify-center h-[90vh] gap-4 text-white"
      >
        <label htmlFor="name" className="flex flex-col">
          <span className="label-text text-black font-bold text-lg">
            Name :
          </span>

          <input
            type="text"
            placeholder="Inter your name"
            className="input input-bordered input-primary  w-80"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="text-red-500">{errors?.name?.message}</p>}
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-black font-bold text-lg">
              Profile Image :
            </span>
          </div>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
            {...register("profileImage")}
          />
        </label>

        <button
          type="submit"
          className="btn bg-purple-700 hover:bg-purple-500 border-0 text-white"
        >
          Change
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
