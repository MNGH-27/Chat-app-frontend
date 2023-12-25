import { type FC } from 'react'
import Image, { type ImageLoaderProps, type ImageProps } from 'next/image'

const myLoader = ({ src }: ImageLoaderProps): string => {
    return src
}

const CImage: FC<ImageProps> = ({ alt, src, ...rest }) => {
    return <Image loader={myLoader} alt={alt} src={src} {...rest} />
}

export default CImage
