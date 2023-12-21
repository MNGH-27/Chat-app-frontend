import { type FC } from 'react'
import Image, { type ImageProps } from 'next/image'

const CImage: FC<ImageProps> = ({ alt, src, ...rest }) => {
    return <Image alt={alt} src={src} {...rest} />
}

export default CImage
