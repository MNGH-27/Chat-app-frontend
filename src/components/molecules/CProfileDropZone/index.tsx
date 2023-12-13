'use client'

import { type FC, forwardRef } from 'react'
import React from 'react'

import { Upload } from 'antd'
import { IconPhotoCirclePlus } from '@tabler/icons-react'

import { type ICProfileDropZoneProps } from './resources'

const CProfileDropZone: FC<ICProfileDropZoneProps> = forwardRef(({ value, onChange, ...rest }, ref) => {
    return (
        <>
            <Upload
                className='w-fit'
                listType='picture-circle'
                beforeUpload={() => false}
                fileList={value}
                multiple={false}
                maxCount={1}
                onRemove={() => onChange([])}
                {...rest}
                onChange={(file) => onChange([file.file])}
                ref={ref}
            >
                {(value?.length === 0 || value === undefined) && (
                    <div className='flex items-center justify-center flex-col gap-1 font-semibold'>
                        upload file <IconPhotoCirclePlus />
                    </div>
                )}
            </Upload>
        </>
    )
})

CProfileDropZone.displayName = 'CProfileDropZone'

export default CProfileDropZone
