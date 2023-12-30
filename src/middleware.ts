import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    // Getting cookies from the request using the `RequestCookies` API
    const token = request.cookies.get('token')

    //check if there is token cookie and we are in chat page
    if (!token?.value && request.url.includes('chat')) {
        //there is no token in chat pages
        return NextResponse.redirect(new URL('/', request.url))
    }

    //check if there is token and we are in auth page
    if (token?.value && !request.url.includes('chat')) {
        //there is token , redirect to chat page
        return NextResponse.redirect(new URL('/chat', request.url))
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/', '/chat', '/chat/:userId*']
}
