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

type StepType = 'find-account' | 'verify-otp' | 'change-password';

const STEPS: StepType[] = ['find-account', 'verify-otp', 'change-password'];

const ResetPasswordSchema = (activeStep: StepType) => yup.object().shape({
  userName: yup.string().required('Please enter your user name or email address'),
  otp: activeStep === "verify-otp" ? yup.string().required('Please enter your otp') : yup.string(),
  password: activeStep === "change-password" ? yup.string().required('Please enter your password') : yup.string(),
  confirmPassword: activeStep === "change-password"
    ? yup.string().required('Please enter your confirm password').oneOf([yup.ref('password')], 'Password do not match')
    : yup.string(),
})

export default function ResetPasswordContainer() {
  const { activeStep, goToNextStep, goToPrevStep } = useStep(STEPS);

  const schema = ResetPasswordSchema(activeStep);

  const defaultValues = {
    userName: '',
    otp: '',
    password: '',
    confirmPassword: '',
  }

  const methods = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema),
  })

  const { handleSubmit, resetField } = methods;

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
    goToNextStep();
  }

  const handleVerifyOtp = async () => {
    goToNextStep();
  }

  const handleChangePassword = async () => {
    console.log('complete!');
  }

  return (
    <FormProvider
      methods={methods}
      schema={schema}
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <StepCard
        title="Reset password"
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
