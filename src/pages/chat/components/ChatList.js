import ChatMsg from "./ChatMsg";

const ChatList = (props) => {
    const { list } = props
    return (<div className="chat-list">
        {list.map((i, index) => <ChatMsg key={index} msg={i.val} type={i.type}></ChatMsg>)}
    </div>);
}

export default ChatList;