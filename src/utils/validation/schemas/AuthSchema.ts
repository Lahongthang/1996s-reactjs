import * as yup from 'yup';
import { ResetPasswordStep } from '../../../configs/types';

export const SignInSchema = yup.object().shape({
  userName: yup.string().required('Please enter your user name or email address'),
  password: yup.string().required('Please enter your password'),
}).required()

export const SignUpSchema = yup.object().shape({
  userName: yup.string().required('Please enter your user name'),
  email: yup.string().required('Please enter your email').email('Please enter a valid email'),
  password: yup.string().required('Please enter your password'),
  confirmPassword: yup.string().required('Please enter your confirm password').oneOf([yup.ref('password')], 'Password do not match'),
})

export const ResetPasswordSchema = (activeStep: ResetPasswordStep) => yup.object().shape({
  email: yup.string().email('Please enter a valid email address').required('Please enter your user name or email address'),
  otp: activeStep === "verify-otp" ? yup.string().required('Please enter your otp') : yup.string(),
  password: activeStep === "change-password" ? yup.string().required('Please enter your password') : yup.string(),
  confirmPassword: activeStep === "change-password"
    ? yup.string().required('Please enter your confirm password').oneOf([yup.ref('password')], 'Password do not match')
    : yup.string(),
})
