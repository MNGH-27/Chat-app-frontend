import { useMutation } from '@tanstack/react-query'

const useAppMutation = ({ ...rest }) => {
    return useMutation({
        ...rest
    })
}

export default useAppMutation
