import { useState } from "react";
import ChatInput from "./components/ChatInput";
import ChatList from "./components/ChatList";

const Chat = () => {
    const [list, setList] = useState([{
        val: '请输入你的问题',
        type: 'answer'
    }])


    function handleSend(val) {
        const newList = [...list, {
            val,
            type: 'question'
        }]
        setList(newList)

    }

    return (<div className="chat">
        <ChatList list={list}></ChatList>
        <ChatInput handleSend={handleSend}></ChatInput>
    </div>);
}

export default Chat;