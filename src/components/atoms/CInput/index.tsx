import React, { forwardRef } from 'react'

import { Input, type InputProps } from 'antd'

interface CInputProps extends InputProps {
    variant?: 'password' | 'default' | 'textarea'
}

const CInput = forwardRef<HTMLInputElement, CInputProps>(({ variant = 'default', ...rest }) => {
    switch (variant) {
        case 'password':
            return <Input.Password {...rest} autoComplete='new-password' />
        default:
            return <Input autoComplete='off' {...rest} />
    }
})

CInput.displayName = 'CInput'

export default CInput
