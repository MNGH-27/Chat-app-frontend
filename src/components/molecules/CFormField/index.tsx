import React from 'react'

import { ErrorMessage } from '@hookform/error-message'
import { IconAlertOctagonFilled } from '@tabler/icons-react'

import { type ICFormFieldProps } from './resources'

const CFormField: React.FC<ICFormFieldProps> = ({ errors, labelText, fieldName, className = '', children }) => {
    return (
        <div className={`form-control w-full ${className}`}>
            <label className='label-text'>{labelText}</label>

            {children}

            {
                //check if there is error
                errors[fieldName] && (
                    //show error to user
                    <div className='flex items-center justify-start gap-x-2 text-red-700 mt-1 '>
                        <IconAlertOctagonFilled size={16} />
                        <ErrorMessage
                            name={fieldName}
                            errors={errors}
                            render={({ message }) => <span className='!text-sm'>{message}</span>}
                        />
                    </div>
                )
            }
        </div>
    )
}

export default CFormField
