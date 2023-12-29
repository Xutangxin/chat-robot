import { Input, Button, message } from 'antd';
import { useState } from 'react';
import { SendOutlined } from '@ant-design/icons';
const { TextArea } = Input;

const ChatInput = (props) => {
    const { handleSend, disabled } = props
    const [inputVal, setInputVal] = useState('')

    function handleInput(e) {
        setInputVal(e.target.value)
    }
    function handleKeyDown(e) {
        const { ctrlKey, key } = e
        if (ctrlKey && key === 'Enter') {
            send()
        }
    }

    function send() {
        if (disabled) {
            message.warning('请等待当前回答完成')
            return
        }
        handleSend(inputVal)
        setInputVal('')
    }


    return (<div className="chat-input">
        <TextArea className='val-input' placeholder='请输入内容，Ctrl+Enter发送' value={inputVal} rows={3}
            onChange={(e) => handleInput(e)}
            onKeyDown={(e) => handleKeyDown(e)}
        ></TextArea>
        <Button onClick={send} disabled={!inputVal} className='send-btn' type="primary" size='large' icon={<SendOutlined />} />

    </div>);
}

export default ChatInput;