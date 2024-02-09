import * as yup from 'yup';
import { useForm } from "react-hook-form";
import Card from "../../../components/Card";
import { FormProvider } from "../../../components/RHF";
import SignInForm from "./SignInForm";
import { yupResolver } from '@hookform/resolvers/yup';

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

  const { handleSubmit } = methods;

  const handleSignIn = () => {
    console.log('sign in');
  }

  return (
    <Card title="Sign In" titleIcon="mdi:sign-in">
      <FormProvider
        methods={methods}
        schema={SignInSchema}
        onSubmit={handleSubmit(handleSignIn)}
      >
        <SignInForm />
      </FormProvider>
    </Card>
  )
}
