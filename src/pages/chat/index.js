import { useState } from "react";
import ChatInput from "./components/ChatInput";
import ChatList from "./components/ChatList";

const Chat = () => {
    const hello = "你好，我是机器人，请输入你的问题"
    const [list, setList] = useState([{
        val: hello,
        type: 'answer'
    }])


    function handleSend(val) {
        addMsg({
            val,
            type: 'question'
        })
        setTimeout(() => {
            handleReplay()
        }, 1000);
    }

    function handleReplay() {
        addMsg({
            val: hello,
            type: 'answer'
        })
    }

    function addMsg(val) {
        setList((current) => [...current, val])
    }

    return (<div className="chat">
        <ChatList list={list}></ChatList>
        <ChatInput handleSend={handleSend}></ChatInput>
    </div>);
}

export default Chat;