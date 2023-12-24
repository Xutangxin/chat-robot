import { Input, Button } from 'antd';
import { useState } from 'react';
import { SendOutlined } from '@ant-design/icons';
const { TextArea } = Input;

const ChatInput = (props) => {
    const { handleSend } = props
    const [inputVal, setInputVal] = useState('')

    function handleInput(e) {
        setInputVal(e.target.value)
    }
    function handleKeyDown(e) {
        // if (e.code !== "Enter") return
    }
    function handleClick() {
        handleSend(inputVal)
        setInputVal('')
    }


    return (<div className="chat-input">
        <TextArea className='val-input' value={inputVal} rows={4}
            onChange={(e) => handleInput(e)}
            onKeyDown={(e) => handleKeyDown(e)}
        ></TextArea>
        <Button onClick={handleClick} disabled={!inputVal} className='send-btn' type="primary" size='large' icon={<SendOutlined />} />

    </div>);
}

export default ChatInput;