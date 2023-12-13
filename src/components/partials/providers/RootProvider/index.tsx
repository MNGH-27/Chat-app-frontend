'use client'

import React from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import NextAdapterApp from 'next-query-params/app'

import { Toaster } from 'react-hot-toast'
import { QueryParamProvider } from 'use-query-params'
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs'
import type Entity from '@ant-design/cssinjs/es/Cache'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { type TWrapperWithChildrenType } from '@core/types/common/wrapper-with-children'

// Create a new query client
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false
        }
    }
})

const RootProvider = ({ children }: TWrapperWithChildrenType) => {
    const cache = React.useMemo<Entity>(() => createCache(), [])
    const isServerInserted = React.useRef<boolean>(false)
    useServerInsertedHTML(() => {
        // avoid duplicate css insert
        if (isServerInserted.current) {
            return
        }
        isServerInserted.current = true
        return <style id='antd' dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }} />
    })

    return (
        <QueryClientProvider client={queryClient}>
            <QueryParamProvider adapter={NextAdapterApp}>
                <StyleProvider cache={cache}>
                    {children}
                    <Toaster />
                </StyleProvider>
            </QueryParamProvider>
            <ReactQueryDevtools initialIsOpen={false} buttonPosition='bottom-left' />
        </QueryClientProvider>
    )
}

export { RootProvider }
