import { useForm } from "react-hook-form";
import { useAppSelector } from "../../hooks/reducer";
import ChatName from "./ChatName";
import { FiSend } from "react-icons/fi";
const Chats = () => {
  const { handleSubmit, register } = useForm();
  const chatWith = useAppSelector((state) => state.chatWith);
  // console.log(chatWith);
  if (!chatWith.email) {
    return <div></div>;
  }
  return (
    <div className="bg-white h-[90vh] w-3/4 overflow-auto rounded-lg">
      <ChatName data={chatWith}></ChatName>
      {/* input field */}

      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <input
          {...register("message")}
          type="text"
          placeholder="Type your message here..."
          className="input h-14 text-white input-bordered input-info w-[70vw] absolute bottom-5 right-7"
        />
        <button className="">
          <FiSend className="text-white hover:bg-slate-600 absolute bottom-7 right-10 text-3xl "></FiSend>
        </button>
      </form>
    </div>
  );
};

export default Chats;
