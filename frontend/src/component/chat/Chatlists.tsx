import { handleError } from "../../hooks/toas";
import { useAllPeopleQuery } from "../../services/userApi";
import { TUser } from "../../type/user";
import ChatName from "./ChatName";

const Chatlists = () => {
  const { data, isLoading, error } = useAllPeopleQuery();
  // console.log(data);
  if (error) {
    handleError(error?.data.message || error?.error);
  }

  return (
    <div className="bg-[#FFF] h-[90vh] w-3/12 overflow-auto rounded-xl p-5">
      <p className="text-black mb-10 font-extrabold text-3xl">People</p>
      {!isLoading &&
        data.data.map((name: TUser, index: number) => (
          <ChatName data={name} key={index}></ChatName>
        ))}
    </div>
  );
};

export default Chatlists;
