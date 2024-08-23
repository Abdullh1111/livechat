import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/reducer";
import { TMassege } from "../../type/basic-type";
import { socket } from "../../Mainurl/Url";

const ShowMessage = ({ message }: { message: TMassege }) => {
  const chatWith = useAppSelector((state) => state.chatWith);
  const user = useAppSelector((state) => state.user);
  const [onConnection, setOnConnection] = useState(false)
  const sender = chatWith._id === message.to;
  useEffect(() => {
    
    socket.emit("setup",user);
    socket.on("connection",()=>{setOnConnection(true)})
  }, [user]);
  console.log(onConnection);
  
  return (
    <div
      className={`flex px-8 font-bold text-lg  ${
        sender ? " justify-end" : "justify-start"
      }`}
    >
      <p
        className={`mt-4 px-4 py-1 rounded-full ${
          sender ? "text-white bg-[#6E00FF]" : "text-black bg-[#E7E7E7]"
        }`}
      >
        {message.message}
      </p>
    </div>
  );
};

export default ShowMessage;
