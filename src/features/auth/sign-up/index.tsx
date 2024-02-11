import { useForm } from "react-hook-form";
import Card from "../../../components/Card";
import { FormProvider } from "../../../components/RHF";
import SignUpForm from "./SignUpForm";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpData } from "../../../configs/types";
import { dispatch } from "../../../app/store";
import { authApi } from "../../../app/services/auth/authApi";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";
import CompleteCard from "./CompleteCard";
import { SubmitButton } from "../../../components/buttons";

const SignUpSchema = yup.object().shape({
  userName: yup.string().required('Please enter your user name'),
  email: yup.string().required('Please enter your email').email('Please enter a valid email'),
  password: yup.string().required('Please enter your password'),
  confirmPassword: yup.string().required('Please enter your confirm password').oneOf([yup.ref('password')], 'Password do not match'),
})

export default function SignUpContainer() {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isHandling, setIsHandling] = useState<boolean>(false);

  const defaultValues = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  const methods = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(SignUpSchema),
  })

  const { handleSubmit, getValues } = methods;

  const { userName, email } = getValues();

  const handleSignUp = async (data: SignUpData) => {
    setIsHandling(true);
    const bodyData = (({ confirmPassword, ...rest }) => rest)(data);
    try {
      await dispatch(authApi.endpoints.signUp.initiate(bodyData)).unwrap();
      enqueueSnackbar('Sign up successfully', { variant: 'success' });
      setIsSuccess(true);
    } catch (error: any) {
      enqueueSnackbar(error.data.message, { variant: 'error' });
      console.error(error);
    } finally {
      setIsHandling(false);
    }
  }

  return (
    <>
      {isSuccess
        ? (
          <CompleteCard
            userName={userName}
            email={email}
          />
        ) : (
          <FormProvider
            methods={methods}
            schema={SignUpSchema}
            onSubmit={handleSubmit(handleSignUp)}
          >
            <Card
              title="Sign Up"
              titleIcon="fa6-solid:user-plus"
              actions={() => <SubmitButton
                fullWidth
                title='Sign Up'
                loading={isHandling}
                loadingIndicator={'Signing Up...'}
              />}
            >
              <SignUpForm />
            </Card>
          </FormProvider>
        )}
    </>
  )
}
