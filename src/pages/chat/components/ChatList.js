import { forwardRef, useState, useEffect } from "react";
import ChatMsg from "./ChatMsg";


const ChatList = forwardRef((props, ref) => {
    const { list } = props
    const humanAvatar = "https://upload.jianshu.io/users/upload_avatars/25713415/52279386-8340-4c1f-aae9-058908635bcd.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"
    const [avatar, setAvatar] = useState(humanAvatar)

    function changeAvatar(val) {
        setAvatar(val)
        memoUrl(val)
    }

    function memoUrl(url) {
        localStorage.setItem('avatarUrl', url)
    }

    useEffect(() => {
        const url = localStorage.getItem('avatarUrl').trim() || humanAvatar
        setAvatar(url)
    }, [])

    return (<div className="chat-list" ref={ref}>
        {list.map((i, index) => <ChatMsg key={index} avatar={avatar} msg={i.val} type={i.type} isAnswering={i.isAnswering} changeAvatar={changeAvatar}></ChatMsg>)}
    </div>);
})

export default ChatList;