import { type Socket } from 'socket.io-client'
import { create } from 'zustand'

interface ISocketStoreType {
    socket?: Socket
    addSocket: (socket: Socket) => void
}

const useSocketStore = create<ISocketStoreType>((set) => ({
    addSocket: (socket) => set(() => ({ socket }))
}))

export default useSocketStore
