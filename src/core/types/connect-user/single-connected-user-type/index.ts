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
    }
}

export default TSingleConnectedUserType
