import { useAppSelector } from "../../hooks/reducer";
import { useGetMessageQuery } from "../../services/messageApi";
import { TMassege } from "../../type/basic-type";
import ShowMessage from "./ShowMessage";

const GetMessage = () => {
  const chatWith = useAppSelector((state) => state.chatWith);
  const { data } = useGetMessageQuery(chatWith._id);

  return <div>
    {data && data.data.map((message: TMassege) =><ShowMessage message={message} key={message._id}></ShowMessage>)}
  </div>;
};

export default GetMessage;
