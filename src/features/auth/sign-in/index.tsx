import { useForm } from "react-hook-form";
import Card from "../../../components/Card";
import { FormProvider } from "../../../components/RHF";
import SignInForm from "./SignInForm";
import { yupResolver } from '@hookform/resolvers/yup';
import { SignInData } from '../../../configs/types';
import { dispatch } from '../../../app/store';
import { authApi } from '../../../app/services/auth/authApi';
import { enqueueSnackbar } from 'notistack';
import { useState } from 'react';
import { SubmitButton } from '../../../components/buttons';
import { SignInSchema } from '../../../utils/validation/schemas/AuthSchema';

export default function SignInContainer() {
  const [isHandling, setIsHandling] = useState<boolean>(false);

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
    setIsHandling(true);
    try {
      await dispatch(authApi.endpoints.signIn.initiate(data)).unwrap();
      enqueueSnackbar('Sign in successfully', { variant: 'success' });
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
      schema={SignInSchema}
      onSubmit={methods.handleSubmit(handleSignIn)}
    >
      <Card
        title="Sign In"
        titleIcon="mdi:sign-in"
        actions={() => <SubmitButton
          fullWidth
          title="Sign In"
          loading={isHandling}
          loadingIndicator={'Signing In...'}
        />}
      >
        <SignInForm />
      </Card>
    </FormProvider>
  )
}
