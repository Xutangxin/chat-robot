// import style from './ChatMsg.css'
const robotSrc = "https://img.88icon.com/upload/jpg/20210627/a2bf2491c7a21c5a7025bf6b0d46d5ff_27470_512_512.jpg!bg"
// const humanSrc = "https://upload.jianshu.io/users/upload_avatars/25713415/52279386-8340-4c1f-aae9-058908635bcd.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"
const humanSrc = "https://tse2-mm.cn.bing.net/th/id/OIP-C.d_fZWEwiD6CE95keycujmAHaGY?w=210&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"


const ChatMsg = (props) => {
    const { type, msg } = props

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
                    src={humanSrc}
                    alt="" className="avatar" />
            </div>
        )
        }


    </div>);
}

export default ChatMsg;