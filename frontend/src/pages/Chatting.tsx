
import Chatlists from '../component/chat/Chatlists';
import Chats from '../component/chat/Chats';

const Chatting = () => {
    return (
        <div  className="flex gap-10 p-5">
            <Chatlists></Chatlists>
            <Chats></Chats>
        </div>
    );
};

export default Chatting;