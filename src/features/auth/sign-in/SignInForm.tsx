import { Stack } from "@mui/material";
import { RHFPasswordField, RHFTextField } from "../../../components/RHF";
import { SubmitButton } from "../../../components/buttons";

const SignInForm = () => {
  return (
    <Stack spacing={2}>
      <RHFTextField
        name="userName"
        label='User name'
      />
      <RHFPasswordField
        name="password"
        label='Password'
      />
      <SubmitButton title="Sign In" />
    </Stack>
  )
}

export default SignInForm;
