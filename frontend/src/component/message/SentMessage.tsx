import { useForm } from "react-hook-form";

import { FiSend } from "react-icons/fi";
import { useAppSelector } from "../../hooks/reducer";
const SentMessage = () => {
  const chatWith = useAppSelector((state) => state.chatWith);

  const { handleSubmit, register } = useForm();
  return (
    <div>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <input
          {...register("message")}
          type="text"
          placeholder="Type your message here..."
          className="input h-14 text-white input-bordered input-info w-[70vw] absolute bottom-5 right-7"
        />
        <button>
          <FiSend className="text-white hover:bg-slate-600 absolute bottom-7 right-10 text-3xl "></FiSend>
        </button>
      </form>
    </div>
  );
};

export default SentMessage;
