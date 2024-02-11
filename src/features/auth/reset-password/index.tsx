import { useForm } from "react-hook-form";
import { FormProvider } from "../../../components/RHF";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import FindAccountForm from "./FindAccountForm";
import VerifyOtpForm from "./VerifyOtpForm";
import ChangePasswordForm from "./ChangePasswordForm";
import { useStep } from "../../../hooks";
import { SubmitButton } from "../../../components/buttons";
import StepCard from "./StepCard";
import { dispatch } from "../../../app/store";
import { authApi } from "../../../app/services/auth/authApi";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type StepType = 'find-account' | 'verify-otp' | 'change-password';

const STEPS: StepType[] = ['find-account', 'verify-otp', 'change-password'];

const ResetPasswordSchema = (activeStep: StepType) => yup.object().shape({
  email: yup.string().email('Please enter a valid email address').required('Please enter your user name or email address'),
  otp: activeStep === "verify-otp" ? yup.string().required('Please enter your otp') : yup.string(),
  password: activeStep === "change-password" ? yup.string().required('Please enter your password') : yup.string(),
  confirmPassword: activeStep === "change-password"
    ? yup.string().required('Please enter your confirm password').oneOf([yup.ref('password')], 'Password do not match')
    : yup.string(),
})

export default function ResetPasswordContainer() {
  const navigate = useNavigate();

  const [isHandling, setIsHandling] = useState<boolean>(false);

  const { activeStep, goToNextStep, goToPrevStep } = useStep(STEPS);

  const schema = ResetPasswordSchema(activeStep);

  const defaultValues = {
    email: '',
    otp: '',
    password: '',
    confirmPassword: '',
  }

  const methods = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema),
  })

  const { handleSubmit, resetField, getValues } = methods;

  const handleFormSubmit = () => {
    setIsHandling(true);
    switch (activeStep) {
      case 'find-account':
        handleFindAccount();
        break;
      case "verify-otp":
        handleVerifyOtp();
        break;
      case "change-password":
        handleChangePassword();
        break;
      default:
    }
  }

  const handleFindAccount = async () => {
    const email = getValues('email');
    try {
      await dispatch(authApi.endpoints.findUser.initiate({ email })).unwrap();
      goToNextStep();
    } catch (error: any) {
      enqueueSnackbar(error.data.message, { variant: 'error' });
      console.error(error);
    } finally {
      setIsHandling(false);
    }
  }

  const handleVerifyOtp = async () => {
    const { otp, email } = getValues();
    try {
      await dispatch(authApi.endpoints.verifyOtp.initiate({ otp, email })).unwrap();
      goToNextStep();
    } catch (error: any) {
      enqueueSnackbar(error.data.message, { variant: 'error' });
      console.error(error);
    } finally {
      setIsHandling(false);
    }
  }

  const handleChangePassword = async () => {
    const { email, password } = getValues();
    try {
      await dispatch(authApi.endpoints.changePassword.initiate({ email, password })).unwrap();
      enqueueSnackbar('Reset password successfully!', { variant: 'success' });
      navigate('/sign-in');
    } catch (error: any) {
      enqueueSnackbar(error.data.message, { variant: 'error' });
      console.error(error);
    } finally {
      setIsHandling(false);
    }
  }

  return (
    <FormProvider
      methods={methods}
      schema={schema}
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <StepCard
        title="Find your account"
        titleIcon="mingcute:user-search-fill"
        {...(activeStep === 'verify-otp' && {
          title: 'Verify OTP',
          titleIcon: 'uil:comment-verify'
        })}
        {...(activeStep === 'change-password' && {
          title: 'Change password',
          titleIcon: 'fluent:key-reset-20-filled'
        })}
        canBack={activeStep === "verify-otp"}
        onBack={() => {
          resetField('otp');
          goToPrevStep();
        }}
        actions={() => <SubmitButton
          fullWidth
          loading={isHandling}
          title="Find Account"
          loadingIndicator={'Finding...'}
          {...(activeStep === 'verify-otp' && {
            title: 'Verify OTP',
            loadingIndicator: 'Verifying...'
          })}
          {...(activeStep === 'change-password' && {
            title: 'Change Password',
            loadingIndicator: 'Changing...'
          })}
        />}
      >
        {activeStep === "find-account" && <FindAccountForm />}
        {activeStep === "verify-otp" && <VerifyOtpForm />}
        {activeStep === "change-password" && <ChangePasswordForm />}
      </StepCard>
    </FormProvider>
  )
}
