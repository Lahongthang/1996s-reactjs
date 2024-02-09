import { Stack } from "@mui/material";
import { RHFTextField } from "../../../components/RHF";
import { SubmitButton } from "../../../components/buttons";

const SignInForm = () => {
  return (
    <Stack spacing={2}>
      <RHFTextField
        name="userName"
        label='User name'
      />
      <RHFTextField
        name="password"
        label='Password'
      />
      <SubmitButton title="Sign In" />
    </Stack>
  )
}

export default SignInForm;
