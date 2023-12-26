import React, { type FC, forwardRef, type Ref } from 'react'

import { Input, type InputProps, type InputRef } from 'antd'

interface ICInputProps extends InputProps {
    variant?: 'password' | 'default' | 'textarea'
    ref?: Ref<InputRef> | undefined
}

const CInput: FC<ICInputProps> = forwardRef(({ variant = 'default', ...rest }, ref) => {
    switch (variant) {
        case 'password':
            return <Input.Password autoComplete='new-password' {...rest} ref={ref} />
        default:
            return <Input autoComplete='off' {...rest} ref={ref} />
    }
})

CInput.displayName = 'CInput'

export default CInput
