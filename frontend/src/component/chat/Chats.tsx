import { useAppSelector } from "../../hooks/reducer";
import GetMessage from "../message/GetMessage";
import SentMessage from "../message/SentMessage";
import ChatName from "./ChatName";
const Chats = () => {
  const chatWith = useAppSelector((state) => state.chatWith);
  // console.log(chatWith);
  if (!chatWith.email) {
    return <div></div>;
  }
  return (
    <div className="bg-white h-[90vh] w-3/4 overflow-auto rounded-lg">
      <ChatName data={chatWith}></ChatName>

      <div className=" overflow-auto h-[75vh]">
        <GetMessage></GetMessage>
      </div>
      {/* input field */}
      <SentMessage></SentMessage>
    </div>
  );
};

export default Chats;
