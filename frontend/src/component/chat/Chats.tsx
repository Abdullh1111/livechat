import { setChatWith } from "../../features/chatWith/chatWithSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/reducer";
import GetMessage from "../message/GetMessage";
import SentMessage from "../message/SentMessage";
import ChatName from "./ChatName";
const Chats = () => {
  const chatWith = useAppSelector((state) => state?.chatWith);
  const dispatch = useAppDispatch()
  // console.log(chatWith);
  if (!chatWith?.email) {
    return <div></div>;
  }
  window.addEventListener("popstate", () => {
    dispatch(setChatWith({ name: "" })); // Update chatWith state to empty
  });
  return (
    <div className={`bg-white h-[90vh]  md:grid w-full md:w-[60%] lg:w-3/4 2xl:w-full overflow-auto rounded-lg ${chatWith?.name? '': "hidden"}`}>
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
