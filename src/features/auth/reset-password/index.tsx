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
    }
  }

  return (
    <FormProvider
      methods={methods}
      schema={schema}
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <StepCard
        title={activeStep === 'find-account'
          ? 'Find your account' : activeStep === 'verify-otp'
            ? 'Verify Otp' : 'Change password'
        }
        titleIcon="fluent:key-reset-20-filled"
        canBack={activeStep === "verify-otp"}
        onBack={() => {
          resetField('otp');
          goToPrevStep();
        }}
        actions={() => <SubmitButton
          fullWidth
          title={activeStep === "find-account"
            ? 'Find Account' : activeStep === 'verify-otp'
              ? 'Verify Otp' : 'Change Password'
          }
        />}
      >
        {activeStep === "find-account" && <FindAccountForm />}
        {activeStep === "verify-otp" && <VerifyOtpForm />}
        {activeStep === "change-password" && <ChangePasswordForm />}
      </StepCard>
    </FormProvider>
  )
}
