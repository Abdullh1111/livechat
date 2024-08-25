import { useForm } from "react-hook-form";

import { FiSend } from "react-icons/fi";
import { useAppSelector } from "../../hooks/reducer";
import { useSentMessageMutation } from "../../services/messageApi";
import { handleError } from "../../hooks/toas";
import { useEffect } from "react";
import { socket } from "../../Mainurl/Url";
type TData = { message: string };

const SentMessage = () => {
  const { _id } = useAppSelector((state) => state.chatWith);
  const [update, { error }] = useSentMessageMutation();

  useEffect(() => {
    if (error) {
      handleError(error);
    }
  }, [error]);

  const { handleSubmit, register, reset } = useForm();
  const onSubmit = (data: TData) => {
    const message = { ...data, to: _id } 
    update({ messages: message});
    socket.emit("send message",message)
    
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit((data) => onSubmit(data as TData))}>
        <input
          autoFocus
          {...register("message")}
          type="text"
          placeholder="Type your message here..."
          className="input h-14 text-white input-bordered input-info w-[90%] md:w-[48vw] lg:w-[55vw] xl:w-[58vw] 2xl:w-[77vw] absolute bottom-3 right-4 md:right-8"
        />
        <button>
          <FiSend className="text-white hover:bg-slate-600 absolute bottom-7 right-10 text-3xl "></FiSend>
        </button>
      </form>
    </div>
  );
};

export default SentMessage;
