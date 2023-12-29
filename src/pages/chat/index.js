import React, { useRef, useState, useEffect } from "react";
import ChatInput from "./components/ChatInput";
import ChatList from "./components/ChatList";
import { getReply, getToken } from "../../api";

const Chat = () => {
    const [isReplying, setIsReplying] = useState(false)
    const [token, setToken] = useState('')
    const [list, setList] = useState([{
        val: '愚蠢的人类，输入你的问题',
        type: 'answer'
    }])
    const listRef = useRef('')

    useEffect(() => {
        fetchToken()
    }, [])

    async function fetchToken() {
        try {
            const res = await getToken()
            const { data: { access_token } } = res
            setToken(access_token)
        } catch (err) {
            console.log('err', err)
        }
    }

    function handleSend(val) {
        addMsg({
            val,
            type: 'question'
        })
        scrollToBottom()
        setTimeout(() => {
            handleReplay(val)
        }, 1000);
    }

    async function handleReplay(question) {
        addMsg({
            val: '请稍等',
            type: 'answer',
            isAnswering: true,
        })
        scrollToBottom()
        const res = await getReply(token, {
            "messages": [
                {
                    "role": "user",
                    "content": question
                },
            ],
            "disable_search": false
        })
        const { status, data: { result } } = res
        if (status === 200) {
            setIsReplying(true)
            answer(result)
        }
    }

    function answer(val) {
        let index = 0
        let timer, scrollTimer
        const step = 5
        scrollTimer = setInterval(() => {
            scrollToBottom()
        }, 1000);
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
                clearInterval(scrollTimer)
                setIsReplying(false)
                setLastVal({ ...lastVal, isAnswering: false })
                scrollToBottom()
            }
        }, 150);


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