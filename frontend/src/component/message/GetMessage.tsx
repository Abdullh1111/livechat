import { useEffect, useRef } from "react";
import { useAppSelector } from "../../hooks/reducer";
import { useGetMessageQuery } from "../../services/messageApi";
import { TMassege } from "../../type/basic-type";
import ShowMessage from "./ShowMessage";
import { socket } from "../../Mainurl/Url";

const GetMessage = () => {
  const chatWith = useAppSelector((state) => state.chatWith);
  const { data, isLoading, refetch } = useGetMessageQuery(chatWith._id);
  const messageListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    socket.on("newmessage", () => {
      refetch();
    });
  }, [refetch]);

  const scrollToBottom = () => {
    messageListRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    if (messageListRef?.current) {
      scrollToBottom()
    }
  }, [data?.data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isLoading) {
    return (
      <div >
        {data &&
          data?.data?.map((message: TMassege) => (
            <ShowMessage message={message} key={message?._id}></ShowMessage>
          ))}
        <div ref={messageListRef}></div>
      </div>
    );
  }
};

export default GetMessage;