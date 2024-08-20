import { useState } from "react";
import { setChatWith } from "../../features/chatWith/chatWithSlice";
import { TUser } from "../../type/user";
import { useAppDispatch } from "./../../hooks/reducer";

const ChatName = ({ data }: { data: Partial<TUser> }) => {
  const [select, setSelect] = useState(false);

  const dispatch = useAppDispatch();
  return (
    <div
      className={`hover:bg-slate-100 focus:${select && "bg-slate-400"}`}
      role="button"
      onClick={() => {
        dispatch(setChatWith(data));
        setSelect(true);
      }}
    >
      <div className="flex justify-start items-center gap-6 p-4">
        <img
          className="h-10 w-10 rounded-full"
          src="/istockphoto-1362703367-612x612.jpg"
          alt=""
        />
        <div className="text-black text-lg mb-3">{data.name}</div>
      </div>
      <hr />
    </div>
  );
};

export default ChatName;
