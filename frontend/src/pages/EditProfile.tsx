import { useForm } from "react-hook-form";
import { useEditProfileMutation } from "../services/userApi";
import { handleError } from "../hooks/toas";
import { useAppSelector } from "../hooks/reducer";
import { SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const EditProfile = () => {
  const useData = useAppSelector((state) => state?.user);
  const navigate = useNavigate()
  const [defaultName,setDefaultName] = useState(useData?.name)
  const handleCahnge = (e: { target: { value: SetStateAction<string | undefined>; }; })=>{
    setDefaultName(e.target.value)
  }
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  //   console.log(errors);
  const [update, {data, isLoading, error }] = useEditProfileMutation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    
    const formData = new FormData()
    formData.append('name', data?.name)
    formData.append('email', (useData?.email as string) )
    formData.append("profileImg", data?.profileImg[0] )
    
    update(formData)
  };
  useEffect(()=>{
    if (error) {
      handleError(error);
    }
    if(isLoading){
      <div>loading...</div>
    }
    if(data){
      navigate('/')
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[error,isLoading,data])
  return (
   isLoading ? <div>loading...</div> : <div className=" mx-auto ">
   <form
     onSubmit={handleSubmit(onSubmit)}
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
         value={defaultName}
         onChange={handleCahnge}

       />
       {errors.name && (
         <p className="text-red-500">{errors.name && "Name is required"}</p>
       )}
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
         {...register("profileImg")}
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
