
import Chatlists from '../component/chat/Chatlists';
import Chats from '../component/chat/Chats';

const Chatting = () => {
    return ( 
        <div  className="flex md:gap-10 md:p-5">
            <Chatlists></Chatlists>
            <Chats></Chats>
        </div>
    );
};

export default Chatting;