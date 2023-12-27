import { useState } from "react"
import AvatarModal from "./AvatarModal"

const ChatMsg = (props) => {
    const robotSrc = "https://tse1-mm.cn.bing.net/th/id/OIP-C.JzJdJa3OyVcpC43tYD4sRQAAAA?w=169&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"

    const { type, msg, avatar, changeAvatar, isAnswering = false } = props

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
                    alt="" className="avatar" />  <div className="msg">{msg}
                    {
                        isAnswering && <i className="flicker"></i>
                    }
                </div>
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