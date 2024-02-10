import * as yup from 'yup';
import { useForm } from "react-hook-form";
import Card from "../../../components/Card";
import { FormProvider } from "../../../components/RHF";
import SignInForm from "./SignInForm";
import { yupResolver } from '@hookform/resolvers/yup';
import { SignInData } from '../../../configs/types';
import { dispatch } from '../../../app/store';
import { authApi } from '../../../app/services/auth/authApi';
import { enqueueSnackbar } from 'notistack';

const SignInSchema = yup.object().shape({
  userName: yup.string().required(),
  password: yup.string().required(),
}).required()

export default function SignInContainer() {
  const defaultValues = {
    userName: '',
    password: '',
  }

  const methods = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(SignInSchema),
  })

  const handleSignIn = async (data: SignInData) => {
    try {
      await dispatch(authApi.endpoints.signIn.initiate(data)).unwrap();
      enqueueSnackbar('Sign in successfully', { variant: 'success' });
    } catch (error: any) {
      enqueueSnackbar(error.data.message, { variant: 'error' });
      console.error(error);
    }
  }

  return (
    <Card title="Sign In" titleIcon="mdi:sign-in">
      <FormProvider
        methods={methods}
        schema={SignInSchema}
        onSubmit={methods.handleSubmit(handleSignIn)}
      >
        <SignInForm />
      </FormProvider>
    </Card>
  )
}
