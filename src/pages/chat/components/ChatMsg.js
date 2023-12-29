import { useState } from "react"
import AvatarModal from "./AvatarModal"
import robot from '@/assets/robot.jpg'

const ChatMsg = (props) => {
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

                    src={robot}
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