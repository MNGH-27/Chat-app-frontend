import React from 'react'

import { Modal, type ModalProps } from 'antd'

const CModal: React.FC<ModalProps> = ({ children, ...rest }) => {
    return (
        <Modal {...rest} footer={false} destroyOnClose>
            {children}
        </Modal>
    )
}

export default CModal
