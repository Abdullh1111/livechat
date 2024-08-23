import { useAppSelector } from "../../hooks/reducer";
import { handleError } from "../../hooks/toas";
import { useAllPeopleQuery } from "../../services/userApi";
import { TUser } from "../../type/basic-type";
import ChatName from "./ChatName";

const Chatlists = () => {
  const { data, isLoading, error } = useAllPeopleQuery();
  const chatWith = useAppSelector(state=>state.chatWith)
  // console.log(data);
  if (error) {
    handleError(error?.data.message || error?.error);
  }

  return (
    <div className={`bg-[#FFF] h-[90vh] md:grid w-full 2xl:w-[20%] md:w-[40%] overflow-auto rounded-xl p-5 ${chatWith.name ? 'hidden': ""}`}>
      <p className="text-black mb-10 font-extrabold text-3xl">People</p>
      {!isLoading &&
        data.data.map((name: TUser, index: number) => (
          <ChatName data={name} key={index}></ChatName>
        ))}
    </div>
  );
};

export default Chatlists;
