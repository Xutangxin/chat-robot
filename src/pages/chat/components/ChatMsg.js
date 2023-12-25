import { useState } from "react"
import AvatarModal from "./AvatarModal"

// import style from './ChatMsg.css'

const ChatMsg = (props) => {
    const robotSrc = "https://img.88icon.com/upload/jpg/20210627/a2bf2491c7a21c5a7025bf6b0d46d5ff_27470_512_512.jpg!bg"

    const { type, msg, avatar, changeAvatar } = props

    const [visible, setVisible] = useState(false)

    function handleOk(val) {
        changeAvatar(val)
        setVisible(false)
    }

    function handleCancel() {
        setVisible(false)
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
                    onClick={() => setVisible(true)}
                    src={avatar}
                    alt="" className="avatar" />
            </div>
        )
        }

        <AvatarModal visible={visible} handleOk={handleOk} handleCancel={handleCancel} ></AvatarModal>


    </div>);
}

export default ChatMsg;