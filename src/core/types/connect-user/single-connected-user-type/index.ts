type TSingleConnectedUserType = {
    message: {
        context: string
        createdAt: Date
        roomId: string
        senderId: string
    }
    user: {
        id: string
        profile: string
        userName: string
        isOnline: boolean
        lastSeen: Date
    }
}

export default TSingleConnectedUserType
