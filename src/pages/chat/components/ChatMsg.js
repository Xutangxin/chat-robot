
// import style from './ChatMsg.css'

const ChatMsg = (props) => {
    const { type, msg } = props

    return (<div className='chat-msg'>
        <div className={['content', type].join(' ')}>
            {type === 'answer' && <div className="avatar">回答</div>}
            <div className="msg">{msg}</div>
            {type === 'question' && <div className="avatar">问题</div>}
        </div>
    </div>);
}

export default ChatMsg;