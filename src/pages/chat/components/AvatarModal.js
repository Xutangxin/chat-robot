import { Modal, Input } from 'antd';
import { useState } from 'react';

const AvatarModal = ({ visible, handleOk, handleCancel }) => {
    const [url, setUrl] = useState('')
    function handleChange(e) {
        setUrl(e.target.value)
    }

    return (
        <Modal title="Change Avatar" open={visible} onOk={() => handleOk(url)} onCancel={handleCancel}>
            <Input placeholder='请输入图片链接' value={url} onChange={(e) => handleChange(e)} ></Input>
        </Modal>
    );
}


export default AvatarModal;