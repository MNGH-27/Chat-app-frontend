import type { Metadata } from 'next'

import { RootProvider } from '@partials/providers/RootProvider'

import { comfortaa } from '@core/configs/fonts'
import { type TWrapperWithChildrenType } from '@core/types/common/wrapper-with-children'

import '@styles/globals.css'

export const metadata: Metadata = {
    title: 'Chat app'
}

const RootLayout = ({ children }: TWrapperWithChildrenType) => {
    return (
        <html lang='en'>
            <body className={comfortaa.className}>
                <RootProvider>{children}</RootProvider>
            </body>
        </html>
    )
}

export default RootLayout
