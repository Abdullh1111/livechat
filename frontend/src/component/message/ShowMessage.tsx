
import { useAppSelector } from "../../hooks/reducer";
import { TMassege } from "../../type/basic-type";

const ShowMessage = ({ message }: { message: TMassege }) => {
  
  const chatWith = useAppSelector((state) => state.chatWith);
  const sender = chatWith._id === message.to;
//  console.log(message);
 
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
