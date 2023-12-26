import React, { useRef, useState, useEffect } from "react";
import ChatInput from "./components/ChatInput";
import ChatList from "./components/ChatList";
// import { getReply, getToken } from "../../api";
import { listArr } from "../../mock/reply";

const Chat = () => {
    const replyList = [...listArr]
    const [isReplying, setIsReplying] = useState(false)
    const [list, setList] = useState([{
        val: '你好，我是机器人，请输入你的问题',
        type: 'answer'
    }])
    const listRef = useRef('')

    // useEffect(() => {
    //     getToken()
    // }, [])


    function handleSend(val) {
        addMsg({
            val,
            type: 'question'
        })
        scrollToBottom()
        setTimeout(() => {
            handleReplay()
        }, 1000);
    }

    async function handleReplay() {
        setIsReplying(true)
        addMsg({
            val: '',
            type: 'answer'
        })
        const val = replyList[Math.floor(Math.random() * 10)]
        let index = 0
        let timer
        timer = setInterval(() => {
            if (index > val.length - 1) {
                clearInterval(timer)
                setIsReplying(false)
            }
            index += 3
            const str = val.slice(0, index)
            const lastval = {
                val: str,
                type: 'answer'
            }
            setList((list) => list.map((i, index) => index === list.length - 1 ? lastval : i))
        }, 150);
        scrollToBottom()
    }

    function addMsg(val) {
        setList((list) => [...list, val])
    }

    function scrollToBottom() {
        setTimeout(() => {
            listRef.current.scrollTop = listRef.current.scrollHeight;
        }, 200);
    }

    return (<div className="chat">
        <ChatList ref={listRef} list={list}></ChatList>
        <ChatInput handleSend={handleSend} disabled={isReplying}></ChatInput>
    </div>);
}

export default Chat;