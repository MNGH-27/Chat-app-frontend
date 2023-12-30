import * as yup from 'yup'

const forgetPasswordSubmitEmailSchema = yup.object({
    email: yup.string().required().email().default('')
})

export default forgetPasswordSubmitEmailSchema
