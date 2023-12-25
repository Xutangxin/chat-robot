import React, { useRef, useState } from "react";
import ChatInput from "./components/ChatInput";
import ChatList from "./components/ChatList";

const Chat = () => {
    const replyList = [
        '我简直无语到爆炸啊！',
        '哈哈哈哈哈哈，笑到肚子疼！',
        '我现在笑得无法自拔！',
        '这个太搞笑了，开心到不行！',
        '拜托，你开什么玩笑啊，笑死我了！',
        '这个笑话简直太逗了，我忍不住笑出声来！',
        '哇哈哈哈哈哈，我差点没笑晕过去！',
        '哎呀呀，这个笑话太冷了，我笑到腹肌抽筋！',
        '哈哈哈哈，我可以笑一整天都不会腻！',
        '哈哈哈，我差点没喷饭，太好笑了！',
        '这个简直是笑话界的经典，笑趴了！',
        '真不敢相信，这个笑话太搞笑了，简直让我笑岔了气！',
        '哈哈哈哈哈，这个笑话太戳中笑点了，笑得我好久没停下来！',
        '哇哇哇，小编你太逗了，我笑得肚子疼！',
        '哈哈哈哈，真不敢相信，这个太有趣了，笑得我泪流满面！',
        '哈哈哈哈哈，这个笑话让我笑得前仰后合！',
        '小编，你太有才了，哈哈哈哈哈哈！',
        '哇哈哈哈哈哈哈，这个笑话简直是笑话界的神作！',
        '我笑得眼泪都出来了，太逗了！',
        '哈哈哈哈哈哈哈哈哈，我笑得直接跳起来了！'
    ]
    const [list, setList] = useState([{
        val: '你好，我是机器人，请输入你的问题',
        type: 'answer'
    }])

    const listRef = useRef('')


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

    function handleReplay() {
        addMsg({
            val: replyList[Math.floor(Math.random() * 20)],
            type: 'answer'
        })
        scrollToBottom()
    }

    function addMsg(val) {
        setList((current) => [...current, val])
    }

    function scrollToBottom() {
        setTimeout(() => {
            listRef.current.scrollTop = listRef.current.scrollHeight;
        }, 200);
    }

    return (<div className="chat">
        <ChatList ref={listRef} list={list}></ChatList>
        <ChatInput handleSend={handleSend}></ChatInput>
    </div>);
}

export default Chat;