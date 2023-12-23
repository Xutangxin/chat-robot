import ChatInput from "./components/ChatInput";
import ChatList from "./components/ChatList";

const Chat = () => {
    return (<div className="chat">
        <ChatList></ChatList>
        <ChatInput></ChatInput>
    </div>);
}

export default Chat;