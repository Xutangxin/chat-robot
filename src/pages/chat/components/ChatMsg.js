import { useEffect, useState } from "react"
import AvatarModal from "./AvatarModal"

// import style from './ChatMsg.css'

const robotSrc = "https://img.88icon.com/upload/jpg/20210627/a2bf2491c7a21c5a7025bf6b0d46d5ff_27470_512_512.jpg!bg"
// const humanSrc = "https://upload.jianshu.io/users/upload_avatars/25713415/52279386-8340-4c1f-aae9-058908635bcd.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"
const humanSrc = "https://tse2-mm.cn.bing.net/th/id/OIP-C.d_fZWEwiD6CE95keycujmAHaGY?w=210&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"


const ChatMsg = (props) => {
    const { type, msg } = props
    const [visible, setVisible] = useState(false)
    const [avatar, setAvatar] = useState(humanSrc)

    useEffect(() => {
        const url = localStorage.getItem('avatarUrl') || humanSrc
        setAvatar(url)
    }, [])

    function handleAvatarClick() {
        setVisible(true)
    }

    function handleOk(val) {
        setVisible(false)
        setAvatar(val)
        memoUrl(val)
    }

    function handleCancel() {
        setVisible(false)
    }

    function memoUrl(url) {
        localStorage.setItem('avatarUrl', url)

    }

    return (<div className='chat-msg'>
        {type === 'answer' && (
            <div className="content answer">
                <img

                    src={robotSrc}
                    alt="" className="avatar" />  <div className="msg">{msg}</div>
            </div>

        )
        }

        {type === 'question' && (
            <div className="content question">
                <div className="msg">{msg}</div>
                <img
                    onClick={handleAvatarClick}
                    src={avatar}
                    alt="" className="avatar" />
            </div>
        )
        }

        <AvatarModal visible={visible} handleOk={handleOk} handleCancel={handleCancel} ></AvatarModal>


    </div>);
}

export default ChatMsg;