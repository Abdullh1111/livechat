import { useAppSelector } from "../../hooks/reducer";
import { handleError } from "../../hooks/toas";
import { useAllPeopleQuery } from "../../services/userApi";
import { TUser } from "../../type/basic-type";
import ChatName from "./ChatName";

const Chatlists = () => {
  const { data, isLoading, error } = useAllPeopleQuery();
  const chatWith = useAppSelector(state=>state?.chatWith)
  const user = useAppSelector(state=>state?.user)
  // console.log(data);
  if (error) {
    handleError(error);
  }
  // console.log(user.name);
  
  return (
    <div className={`bg-[#FFF] max-h-[90vh] md:flex flex-col w-full 2xl:w-[20%] md:w-[40%] overflow-auto rounded-xl p-5 ${chatWith.name ? 'hidden': ""}`}>
      <p className="text-black mb-10 font-extrabold text-3xl">People</p>
      {!isLoading &&
        data?.data?.filter((data:TUser)=> data?.email!==user?.email).map((data: TUser, index: number) => (
          <ChatName data={data} key={index}></ChatName>
        ))}
    </div>
  );
};

export default Chatlists;
