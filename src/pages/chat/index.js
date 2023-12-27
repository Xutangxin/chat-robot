import React, { useRef, useState, useEffect } from "react";
import ChatInput from "./components/ChatInput";
import ChatList from "./components/ChatList";
// import { getReply, getToken } from "../../api";
import { answerList } from "../../mock/reply";

const Chat = () => {
    const replyList = [...answerList]
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
            type: 'answer',
            isAnswering: true,
        })
        const val = replyList[Math.floor(Math.random() * replyList.length)]
        let index = 0
        let timer
        const step = 3
        timer = setInterval(() => {
            const str = val.slice(0, index)
            index += step
            const lastVal = {
                val: str,
                type: 'answer',
                isAnswering: true
            }
            setLastVal(lastVal)
            if (index > val.length - 1 + step) {
                clearInterval(timer)
                setIsReplying(false)
                setLastVal({ ...lastVal, isAnswering: false })
                scrollToBottom()
            }
        }, 150);
        scrollToBottom()
    }

    function setLastVal(val) {
        setList((list) => list.map((i, index) => index === list.length - 1 ? val : i))
    }

    function addMsg(val) {
        setList((list) => [...list, val])
    }

    function scrollToBottom() {
        setTimeout(() => {
            listRef.current.scrollTop = listRef.current.scrollHeight;
        }, 100);
    }

    return (<div className="chat">
        <div className="chat-header">
            <h2>Chat with Robot</h2>
        </div>
        <ChatList ref={listRef} list={list}></ChatList>
        <ChatInput handleSend={handleSend} disabled={isReplying}></ChatInput>
    </div>);
}

export default Chat;