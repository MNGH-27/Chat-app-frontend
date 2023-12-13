import React from 'react'

import { Button, type ButtonProps } from 'antd'

const CButton: React.FC<ButtonProps> = ({ className = '', children, ...rest }) => {
    return (
        <Button className={'text-base flex items-center justify-center gap-x-2 ' + className} {...rest}>
            {children}
        </Button>
    )
}

export default CButton
