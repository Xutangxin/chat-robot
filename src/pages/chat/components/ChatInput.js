import { Input, Button } from 'antd';
import { useState } from 'react';
import { SendOutlined } from '@ant-design/icons';
const { TextArea } = Input;

const ChatInput = () => {
    const [inputVal, setInputVal] = useState('')

    function handleInput(e) {
        setInputVal(e.target.value)
    }

    return (<div className="chat-input">
        <TextArea className='val-input' value={inputVal} onChange={(e) => handleInput(e)} rows={4}></TextArea>
        <Button className='send-btn' type="primary" size='large' icon={<SendOutlined />} />

    </div>);
}

export default ChatInput;