import { useEffect, useState } from "react";
import { updateMessage } from "../../features/chatWith/newmessage";
import { useAppDispatch, useAppSelector } from "../../hooks/reducer";
import { useGetMessageQuery } from "../../services/messageApi";
import { TMassege } from "../../type/basic-type";
import ShowMessage from "./ShowMessage";
import { socket } from "../../Mainurl/Url";

const GetMessage = () => {
  const chatWith = useAppSelector((state) => state.chatWith);
  // const dispatch = useAppDispatch();
  const [newMsg,setNewMsg] = useState(null)
  const { data,isLoading, refetch } = useGetMessageQuery(chatWith._id);
  useEffect(()=>{
    socket.on("newmessage",(data)=>{
      // console.log(data);
      setNewMsg(data)
    })
  })
  useEffect(() => {
      if(newMsg){
        refetch()
        setNewMsg(null)
      }
  }, [newMsg, refetch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
console.log(data.data);

  return (
    <div>
      {data &&
        data.data.map((message: TMassege) => (
          <ShowMessage message={message} key={message._id}></ShowMessage>
        ))}
    </div>
  );
};

export default GetMessage;