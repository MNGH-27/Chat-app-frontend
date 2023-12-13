import * as yup from 'yup'

const forgetPasswordOtpCodeSchema = yup.object({
    otp: yup.string().required().length(6),
    userId: yup.string().required()
})

export default forgetPasswordOtpCodeSchema
