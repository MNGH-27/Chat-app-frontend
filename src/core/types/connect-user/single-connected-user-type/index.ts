type TSingleConnectedUserType = {
    message: {
        context: string
        createdAt: Date
        roomId: string
    }
    user: {
        id: string
        profile: string
        userName: string
    }
}

export default TSingleConnectedUserType
